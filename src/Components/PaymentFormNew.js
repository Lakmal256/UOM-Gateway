import "../Dashboard.css";
import Button from "@mui/material/Button";
import * as React from "react";
import { GATEWAY } from "../Constants/GatewayForm";

const PaymentForm = () => {
  return (
    <div className="payments_form">
      <div className="payment_header">Payments</div>

      {GATEWAY.map((field) => {
            if (field.show) {
              if (field.type === "select") {
                return (
                  <div className="form-row" key={field.id}>
                    <div className="form-label">{field.label}</div>
                  </div>
                );
              } else {
                return (
                  <div className="form-row" key={field.id}>
                    <div className="form-label">{field.label}</div>
                    <input
                      placeholder={field.label}
                      className={field.className}
                      type={field.type}
                      disabled={field.disabled}
                    />
                  </div>
                );
              }
            }
            else{
              return null
            }
          })}

      <div className="next-button-main">
        <Button className="next-button">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
