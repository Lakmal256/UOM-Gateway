import "../Dashboard.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "react-material-ui-searchbar";
import { ROW } from "../Constants/ReceiptsTableForm";
import React, { Component } from "react";
import ReceiptsDialog from "./ReceiptsDialog";

class BasicTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openSignin: false,
    };
  }

  closeSigninModel = () => {
    this.setState({ openSignin: false });
  };

  openSigninModel = () => {
    this.setState({ openSignin: true });
  };

  render() {
    const { openSignin } = this.state;

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
              {ROW.map((row) => (
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
                  <TableCell>
                    <button className="view_receipts_button" onClick={() => this.setState({ openSignin: true })}>
                      {row.action}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ReceiptsDialog
          open={openSignin}
          handleClose={this.closeSigninModel}
          amount="10000"
        />
    </div>
  );
};
}
export default BasicTable;
