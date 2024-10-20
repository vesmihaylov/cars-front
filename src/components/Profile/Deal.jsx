import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Deal({ deal }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{deal.dateAdded}</TableCell>
        <TableCell component="th" scope="row">
          <Link
            className="list-group-item list-group-item-action border-0"
            to={`/deals/${deal.id}`}
          >
            <Chip
              label={deal.name}
              variant="outlined"
              clickable
              icon={<VisibilityIcon />}
            />
          </Link>
        </TableCell>
        <TableCell align="right">{deal.price} лв.</TableCell>
        <TableCell align="right">
          <Fab className="m-1" size="small" color="warning" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab size="small" color="error" aria-label="delete">
            <DeleteIcon />
          </Fab>
        </TableCell>
      </TableRow>
      <TableRow hover>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 3 }}>
              <Typography variant="h6" gutterBottom component="div">
                Описание към обявата
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {deal.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Deal;
