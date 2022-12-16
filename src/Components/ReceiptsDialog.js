import Dialog from "@mui/material/Dialog";
import "../Dashboard.css";
import Transfer from "../images/transfer.png";
import { VIEW } from "../Constants/ViewReceipts";
import React from "react";

const ReceiptDialog = ({ open, handleClose, openSignup }) => {
  return (
    <div>
      <Dialog
        classes={{ paper: "receipts_dialog" }}
        open={open}
        onClose={handleClose}
      >
        <div className="receipts_image_main">
          <img className="receipts_image" src={Transfer} alt="firespot" />
        </div>
        <div className="title-heading">
          <div className="sign-in">Payment Successfull !!!</div>
        </div>
        <div className="receipts_dialog_main">
          <div className="receipts_data_main">
            {VIEW.map((field) => {
              if (field.type === "select") {
                return (
                  <div className="form-row" key={field.id}>
                    <div className="form-label">{field.label}</div>
                    <select
                      className={field.className}
                      disabled={field.disabled}
                    >
                      {field.options.map((option) => {
                        return (
                          <option key={option.id} value={option.id}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                );
              } else {
                return (
                  <div className="data_row_flex" key={field.left.id}>
                    <div className="form_row-left">
                      <div className="form-label-left">{field.left.label}</div>
                      <div
                        name={field.left.name}
                        className={field.left.className}
                      ></div>
                    </div>
                    <div className="form_row-right">
                      <div className="form-label-right">
                        {field.right.label}
                      </div>
                      <div
                        name={field.right.name}
                        className={field.right.className}
                      ></div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="amount_paid_main">
            <div className="amount_paid">Amount Paid</div>
            <div className="how_much">LKR 450.00</div>
          </div>
          <div className="print_close">
            <button className="print_button">Print</button>
            <div>
              <button className="print_button" onClick={openSignup}>
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ReceiptDialog;
