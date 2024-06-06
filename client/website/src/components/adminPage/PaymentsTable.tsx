import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Cookies from "js-cookie";

interface Column {
  id: keyof PaymentModel;
  label: string;
  minWidth: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "lastName", label: "Last Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "amount", label: "Amount", minWidth: 170, align: "right" },
  { id: "date", label: "Date", minWidth: 170, align: "right" },
  { id: "method", label: "Method", minWidth: 170 },
];

interface PaymentModel {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  date: string;
  method: string;
}

export default function PaymentsTable() {
  const [data, setData] = React.useState<PaymentModel[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [open, setOpen] = React.useState(false);
  const [editPayment, setEditPayment] = React.useState<PaymentModel | null>(
    null
  );

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const response = await axios.get("http://localhost:4000/api/payments", {
        headers: {
          Authorization: `Bearer ${JSON.parse(session).token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (payment: PaymentModel | null = null) => {
    setEditPayment(payment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditPayment(null);
  };

  const handleSave = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      if (editPayment?._id) {
        await axios.put(`http://localhost:4000/api/payments/${editPayment._id}`, editPayment, {
          headers: {
            Authorization: `Bearer ${JSON.parse(session).token}`,
          },
        });
      } else {
        await axios.post("http://localhost:4000/api/payments", editPayment, {
          headers: {
            Authorization: `Bearer ${JSON.parse(session).token}`,
          },
        });
      }
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      await axios.delete(`http://localhost:4000/api/payments/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(session).token}`,
        },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClickOpen(null)}
      >
        Add Payment
      </Button>
      <TableContainer>
        <Table style={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                  }}
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
              .map((payment) => (
                <TableRow key={payment._id} hover tabIndex={-1}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || "left"}>
                      {payment[column.id]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleClickOpen(payment)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(payment._id!)}
                    >
                      Delete
                    </Button>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editPayment?._id ? "Edit Payment" : "Add Payment"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={editPayment?.firstName || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                firstName: e.target.value,
              } as PaymentModel)
            }
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={editPayment?.lastName || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                lastName: e.target.value,
              } as PaymentModel)
            }
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value={editPayment?.email || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                email: e.target.value,
              } as PaymentModel)
            }
          />
          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            value={editPayment?.amount || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                amount: parseFloat(e.target.value),
              } as PaymentModel)
            }
          />
          <TextField
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
            value={editPayment?.date || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                date: e.target.value,
              } as PaymentModel)
            }
          />
          <TextField
            margin="dense"
            id="method"
            label="Method"
            type="text"
            fullWidth
            value={editPayment?.method || ""}
            onChange={(e) =>
              setEditPayment({
                ...editPayment,
                method: e.target.value,
              } as PaymentModel)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editPayment?._id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
