"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Cookies from "js-cookie";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SubscriptionModal from "./SubscriptionModal";

interface Column {
  id: keyof Subscription;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: any) => string;
}

interface Subscription {
  _id?: string;
  name: string;
  type: string;
  price: number;
  userId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    format: (value) => `$${value.toFixed(2)}`,
  },
  { id: "userId", label: "UserId", minWidth: 100 },
  {
    id: "startDate",
    label: "Start Date",
    minWidth: 170,
    format: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: "endDate",
    label: "End Date",
    minWidth: 170,
    format: (value) => new Date(value).toLocaleDateString(),
  },
];

export default function SubscriptionsTable() {
  const [data, setData] = React.useState<Subscription[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentSubscription, setCurrentSubscription] =
    React.useState<Subscription | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const token = JSON.parse(session).token;

      const response = await axios.get<Subscription[]>(
        "http://localhost:4000/api/subscriptions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSave = async (subscription: Subscription) => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const token = JSON.parse(session).token;

      if (subscription._id) {
        await axios.put(
          `http://localhost:4000/api/subscriptions/${subscription._id}`,
          subscription,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:4000/api/subscriptions",
          subscription,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      setOpenModal(false);
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const token = JSON.parse(session).token;

      await axios.delete(`http://localhost:4000/api/subscriptions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAdd = () => {
    setCurrentSubscription(null);
    setOpenModal(true);
  };

  const handleEdit = (subscription: Subscription) => {
    setCurrentSubscription(subscription);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentSubscription(null);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAdd}
      >
        Add Subscription
      </Button>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscription, index) => (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  {columns.map((column) => {
                    const value = subscription[column.id];
                    return (
                      <TableCell key={column.id} align={column.align || "left"}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : Array.isArray(value)
                          ? value.join(", ")
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(subscription)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(subscription._id!)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 30, 60]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <SubscriptionModal
        open={openModal}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        subscription={currentSubscription || undefined}
      />
    </Paper>
  );
}
