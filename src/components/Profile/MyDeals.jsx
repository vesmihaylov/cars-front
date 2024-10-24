import Navigation from "./Navigation.jsx";
import deals from "../../fake_data/deals.json";
import * as React from "react";
import Deal from "./Deal.jsx";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

function MyDeals() {
  let myDeals = deals
    .filter((deal) => deal.price >= 10000)
    .map((filteredDeal) => <Deal key={filteredDeal.id} deal={filteredDeal} />);

  return (
    <Box className="container mb-5">
      <h4 className="font-weight-bold py-3 mb-4">Моите обяви</h4>
      <Box className="card overflow-hidden">
        <Grid container spacing={2}>
          <Grid xs={12} sm={3}>
            <Navigation />
          </Grid>
          <Grid xs={12} sm={9} size="grow">
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "none", border: "none" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>
                      <b>Дата на добавяне</b>
                    </TableCell>
                    <TableCell>
                      <b>Обява</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Цена</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Действия</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{myDeals}</TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MyDeals;
