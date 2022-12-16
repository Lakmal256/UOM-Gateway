import "../Dashboard.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "react-material-ui-searchbar";

function createData(paymentId, paymentCategory, amount, date, status,action) {
  return { paymentId, paymentCategory, amount, date, status,action };
}

const rows = [
  createData(1,"Msc",10000,"12/15","Success","View Receipt"),
  createData(2,"Research",7000, "12/14", "Success","View Receipt"),
  createData(3,"Internal Payment",500 ,"12/13", "Success","View Receipt"),
  createData(4,"Msc",12000, "12/12", "Success","View Receipt"),
];

export default function BasicTable() {
  return (
    <div className="receipts_table_main">
      <div className="payment_header">Receipts</div>
      <div>
        <div className="two_buttons">
          <button className="make_a_payment_button">+ Make a Payment</button>
          <div className="search_bar_main">
            <SearchBar
              sx={{
                color: "success.main",
                "& .MuiInputBase-input": {
                  borderRadius: "1px",
                  padding: "0",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table
            sx={{
              color: "success.main",
              "& .MuiTable": {
                padding: "20px",
                width: "600px",
                margin: "auto",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Payment ID</TableCell>
                <TableCell>Payment Category</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.paymentId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.paymentId}
                  </TableCell>
                  <TableCell>{row.paymentCategory}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell><button>{row.action}</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
