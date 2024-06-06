import * as React from "react";
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
import axios from "axios";
import Cookies from "js-cookie";

interface Application {
  _id?: string; // add this for distinguishing between new and existing applications
  name: string;
  description: string;
  features: string[];
  picture: string;
  reviews: { stars: number; review: string; user: string; userId: string }[];
  url: string;
  inputType: string;
  outputType: string;
  sectionId: string;
  sectionName: string;
  pack: string;
}

interface Column {
  id: keyof Application;
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 170 },
  { id: "url", label: "URL", minWidth: 170 },
  { id: "inputType", label: "Input Type", minWidth: 100 },
  { id: "outputType", label: "Output Type", minWidth: 100 },
  { id: "sectionName", label: "Section Name", minWidth: 170 },
  { id: "pack", label: "Pack", minWidth: 100 },
  // Add more columns as needed
];

export default function ServicesTable() {
  const [data, setData] = React.useState<Application[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const [open, setOpen] = React.useState(false);
  const [editApplication, setEditApplication] =
    React.useState<Application | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const session = Cookies.get("adminSession");
      if (!session) return;
      const token = JSON.parse(session).token;
      const response = await axios.get<Application[]>("http://localhost:4000/api/applications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const handleOpen = (application?: Application) => {
    setEditApplication(
      application || {
        name: "",
        description: "",
        features: [],
        picture: "",
        reviews: [],
        url: "",
        inputType: "",
        outputType: "",
        sectionId: "",
        sectionName: "",
        pack: "",
      }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      const token = Cookies.get("token");
      if (editApplication) {
        if (editApplication._id) {
          // Update application
          await axios.put(
            `http://localhost:4000/api/applications/${editApplication._id}`,
            editApplication,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } else {
          // Create new application
          await axios.post("http://localhost:4000/api/applications", editApplication, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }
        fetchData();
        handleClose();
      }
    } catch (error) {
      console.error("Error saving application:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get("token");
      await axios.delete(`http://localhost:4000/api/applications/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Button onClick={() => handleOpen()}>Add Application</Button>
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
              .map((application, index) => (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || "left"}>
                      {column.id === "reviews"
                        ? application.reviews.map((review, index) => (
                            <span key={index}>
                              {`Stars: ${review.stars}, Review: ${review.review}, User: ${review.user}, UserID: ${review.userId}`}
                              {index !== application.reviews.length - 1 && (
                                <br />
                              )}
                            </span>
                          ))
                        : application[column.id]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button onClick={() => handleOpen(application)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(application._id!)}>
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
          {editApplication?._id ? "Edit Application" : "Add Application"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={editApplication?.name || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                name: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={editApplication?.description || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                description: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="features"
            label="Features (comma-separated)"
            type="text"
            fullWidth
            value={editApplication?.features.join(", ") || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                features: e.target.value.split(",").map((f) => f.trim()),
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="picture"
            label="Picture URL"
            type="text"
            fullWidth
            value={editApplication?.picture || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                picture: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="url"
            label="URL"
            type="text"
            fullWidth
            value={editApplication?.url || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                url: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="inputType"
            label="Input Type"
            type="text"
            fullWidth
            value={editApplication?.inputType || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                inputType: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="outputType"
            label="Output Type"
            type="text"
            fullWidth
            value={editApplication?.outputType || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                outputType: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="sectionId"
            label="Section ID"
            type="text"
            fullWidth
            value={editApplication?.sectionId || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                sectionId: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="sectionName"
            label="Section Name"
            type="text"
            fullWidth
            value={editApplication?.sectionName || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                sectionName: e.target.value,
              } as Application)
            }
          />
          <TextField
            margin="dense"
            id="pack"
            label="Pack"
            type="text"
            fullWidth
            value={editApplication?.pack || ""}
            onChange={(e) =>
              setEditApplication({
                ...editApplication,
                pack: e.target.value,
              } as Application)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editApplication?._id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
