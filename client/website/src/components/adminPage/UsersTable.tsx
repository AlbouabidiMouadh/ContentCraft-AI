"use client";
import * as React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

// Define column interface
interface Column {
  id: "firstname" | "lastname" | "email" | "subscription";
  label: string;
  minWidth?: number;
  align?: "right";
}

// Define user interface
interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  subscription: string;
}

const columns: readonly Column[] = [
  { id: "firstname", label: "First Name", minWidth: 170 },
  { id: "lastname", label: "Last Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "subscription", label: "Subscription", minWidth: 170 },
];

export default function UsersTable() {
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(30);
  const [rows, setRows] = React.useState<User[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [editUser, setEditUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;
      console.log(session)
      const token = JSON.parse(session).token;

      const response = await axios.get<User[]>("http://localhost:4000/api/user/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      setRows(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = (user: User | null = null) => {
    setEditUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditUser(null);
  };

  const handleSave = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const token = JSON.parse(session).token;

      if (editUser?._id) {
        await axios.put(`http://localhost:4000/api/users/${editUser._id}`, editUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.post("/api/users", editUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const token = JSON.parse(session).token;

      await axios.delete(`http://localhost:4000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClickOpen(null)}
      >
        Add User
      </Button>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleClickOpen(row)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(row._id!)}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editUser?._id ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="First Name"
            type="text"
            fullWidth
            value={editUser?.firstname || ""}
            onChange={(e) =>
              setEditUser({ ...editUser, firstname: e.target.value } as User)
            }
          />
          <TextField
            margin="dense"
            id="lastname"
            label="Last Name"
            type="text"
            fullWidth
            value={editUser?.lastname || ""}
            onChange={(e) =>
              setEditUser({ ...editUser, lastname: e.target.value } as User)
            }
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value={editUser?.email || ""}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value } as User)
            }
          />
          <TextField
            margin="dense"
            id="subscription"
            label="Subscription"
            type="text"
            fullWidth
            value={editUser?.subscription || ""}
            onChange={(e) =>
              setEditUser({ ...editUser, subscription: e.target.value } as User)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editUser?._id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
