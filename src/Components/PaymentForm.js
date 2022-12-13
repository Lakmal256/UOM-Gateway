import "../Dashboard.css";
import Button from "@mui/material/Button";
import * as React from "react";

const PaymentForm = () => {
  return (
    <div className="payments_form">
      <div className="payment_header">Payments</div>

      <div className="form-row">First Name</div>
      <input className="select-button-1" type="text" />

      <div className="form-row">Last Name</div>
      <input className="select-button-1" type="text" />

      <div className="form-row">Index</div>
      <input className="select-button-1" type="text" />

      <div className="form-row">Phone</div>
      <input className="select-button-1" type="number" />

      <div className="form-row">Email</div>
      <input className="select-button-1" type="email" />

      <div className="form-row">Address</div>
      <input className="select-button-1" type="text" />

      <div className="next-button-main">
        <Button className="next-button">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
