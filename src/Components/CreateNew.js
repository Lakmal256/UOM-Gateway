import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../Dashboard.css";
import Student from "../images/Student.png";
import { useState } from "react";
import { CREATE } from "../Constants/CreateForm";

const Create = ({ open, handleClose, onSubmit }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [dataSet, setDataSet] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var createDataSet = JSON.parse(JSON.stringify(dataSet));
    createDataSet[name] = value;
    setDataSet(createDataSet);
  };

  const controlData = (isSubmit) => {
    setUserName("");
    setPassword("");

    if (isSubmit) {
      if (userName === "" || password === "") {
        console.log("Please Fill the Form");
      } else {
        onSubmit(userName, password);
      }
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        classes={{ paper: "submit-form" }}
        open={open}
        onClose={handleClose}
      >
        <img className="dialog-title" src={Student} alt="firespot" />
        <div className="title-heading">
          <div className="sign-in">Sign Up</div>
          <div className="uom-user">UOM User</div>
        </div>
        <div>
          <hr />
        </div>

        {CREATE.map((field) => {
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
        <div className="signin-text">
          <Button className="signin" onClick={() => controlData(true)}>
            Sign Up
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
export default Create;
