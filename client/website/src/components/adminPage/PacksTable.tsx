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

interface Column {
  id: keyof PackInfo | "actions";
  label: string;
  minWidth: number;
  align?: "right";
}

interface PackInfo {
  id: number;
  type: "Free" | "Paid";
  price: number | null;
  name: string;
  duration: string;
  features: string[];
  supportLevel: string;
  link: string;
}

const columns: Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "duration", label: "Duration", minWidth: 100 },
  { id: "features", label: "Features", minWidth: 170 },
  { id: "supportLevel", label: "Support Level", minWidth: 170 },
  { id: "link", label: "Link", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

export default function PacksTable() {
  const [data, setData] = React.useState<PackInfo[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [open, setOpen] = React.useState(false);
  const [editPack, setEditPack] = React.useState<PackInfo | null>(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/packs");
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

  const handleOpenDialog = (pack: PackInfo | null = null) => {
    setEditPack(pack);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEditPack(null);
  };

  const handleSave = async () => {
    try {
      if (editPack) {
        await axios.put(`http://localhost:4000/api/pack/${editPack.id}`, editPack);
      } else {
        await axios.post("http://localhost:4000/api/pack", editPack);
      }
      fetchData();
      handleCloseDialog();
    } catch (error) {
      console.error("Error saving pack:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/packs/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting pack:", error);
    }
  };

  return (
    <Paper>
      <Button variant="contained" color="primary" onClick={() => handleOpenDialog(null)}>
        Add Pack
      </Button>
      <TableContainer>
        <Table style={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pack) => (
              <TableRow key={pack.id} hover tabIndex={-1}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align || "left"}>
                    {column.id === "actions" ? (
                      <>
                        <Button variant="contained" color="primary" onClick={() => handleOpenDialog(pack)}>
                          Edit
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(pack.id)}>
                          Delete
                        </Button>
                      </>
                    ) : (
                      pack[column.id]
                    )}
                  </TableCell>
                ))}
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
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{editPack ? "Edit Pack" : "Add Pack"}</DialogTitle>
        <DialogContent>
          {/* Input fields for editing/adding pack */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editPack ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
