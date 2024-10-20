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

function MyDeals() {
  let myDeals = deals
    .filter((deal) => deal.price >= 10000)
    .map((filteredDeal) => <Deal key={filteredDeal.id} deal={filteredDeal} />);

  return (
    <div className="container mb-5">
      <h4 className="font-weight-bold py-3 mb-4">Моите обяви</h4>

      <div className="card overflow-hidden">
        <div className="row">
          <Navigation />
          <div className="col-9">
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDeals;
