import Dialog from "@mui/material/Dialog";
import "../Dashboard.css";
import Transfer from "../images/transfer.png";
import React from "react";

const ReceiptDialog = ({ open, handleClose, openSignup }) => {
  return (
    <div>
      <Dialog
        classes={{ paper: "submit-form" }}
        open={open}
        onClose={handleClose}
      >
        <img className="dialog-title" src={Transfer} alt="firespot" />
        <div className="title-heading">
          <div className="sign-in">Sign In</div>
          <div className="uom-user">UOM User</div>
        </div>
        <div className="print_close">
          <button className="signin">Print</button>
          <div>
            <button className="signin" onClick={openSignup}>
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ReceiptDialog;
