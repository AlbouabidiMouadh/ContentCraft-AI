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
  id: keyof SectionModel;
  label: string;
  minWidth: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 170 },
  { id: "url", label: "URL", minWidth: 170 },
];

interface SectionModel {
  _id?: string;
  name: string;
  description: string;
  picture: string;
  url: string;
  appsIds: string[];
}

export default function SectionsTable() {
  const [data, setData] = React.useState<SectionModel[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [open, setOpen] = React.useState(false);
  const [editSection, setEditSection] = React.useState<SectionModel | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      const response = await axios.get("http://localhost:4000/api/sections", {
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (section: SectionModel | null = null) => {
    setEditSection(section);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditSection(null);
  };

  const handleSave = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      if (editSection?._id) {
        await axios.put(`http://localhost:4000/api/section/${editSection._id}`, editSection, {
          headers: {
            Authorization: `Bearer ${JSON.parse(session).token}`,
          },
        });
      } else {
        await axios.post("http://localhost:4000/api/section", editSection, {
          headers: {
            Authorization: `Bearer ${JSON.parse(session).token}`,
          },
        });
      }
      fetchData();
      handleClose();
    } catch (error) {
      console.error("Error saving section:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;

      await axios.delete(`http://localhost:4000/api/section/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(session).token}`,
        },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  return (
    <Paper>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen(null)}>
        Add Section
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
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((section) => (
              <TableRow key={section._id} hover tabIndex={-1}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align || "left"}>
                    {section[column.id]}
                  </TableCell>
                ))}
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleClickOpen(section)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(section._id!)}>
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
        <DialogTitle>{editSection?._id ? "Edit Section" : "Add Section"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={editSection?.name || ""}
            onChange={(e) => setEditSection({ ...editSection, name: e.target.value } as SectionModel)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={editSection?.description || ""}
            onChange={(e) => setEditSection({ ...editSection, description: e.target.value } as SectionModel)}
          />
          <TextField
            margin="dense"
            id="picture"
            label="Picture"
            type="text"
            fullWidth
            value={editSection?.picture || ""}
            onChange={(e) => setEditSection({ ...editSection, picture: e.target.value } as SectionModel)}
          />
          <TextField
            margin="dense"
            id="url"
            label="URL"
            type="text"
            fullWidth
            value={editSection?.url || ""}
            onChange={(e) => setEditSection({ ...editSection, url: e.target.value } as SectionModel)}
          />
          <TextField
            margin="dense"
            id="appsIds"
            label="Apps IDs"
            type="text"
            fullWidth
            value={editSection?.appsIds.join(", ") || ""}
            onChange={(e) => setEditSection({ ...editSection, appsIds: e.target.value.split(",").map(id => id.trim()) } as SectionModel)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editSection?._id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
