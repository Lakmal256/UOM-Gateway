import "../Dashboard.css";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import { GATEWAY } from "../Constants/GatewayForm";

const PaymentForm = () => {
  const [dataSet, setDataSet] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    courseOfStudy: "",
    academicYear: "",
    faculty: "",
    department: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var paymentDataSet = JSON.parse(JSON.stringify(dataSet));
    paymentDataSet[name] = value;
    setDataSet(paymentDataSet);
  };

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
                  name={field.name}
                  className={field.className}
                  type={field.type}
                  disabled={field.disabled}
                  onChange={(e) => handleData(e)}
                  value={dataSet[field.name]}
                />
              </div>
            );
          }
        } else {
          return null;
        }
      })}

      <div className="next-button-main">
        <Button className="next-button">Next</Button>
      </div>
    </div>
  );
};

export default PaymentForm;
