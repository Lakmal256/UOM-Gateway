import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../Dashboard.css";
import Student from "../images/Student.png";

const Create = ({ open, handleClose, onSubmit }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleData = (isSubmit) => {
    setUser("");
    setPassword("");

    if (isSubmit) {
      if (user === "" || password === "") {
        console.log("Please Fill the Form");
      } else {
        onSubmit(user, password);
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

        <div className="form-row">First Name</div>
        <input className="select-button-1" type="text" />

        <div className="form-row">Last Name</div>
        <input className="select-button-1" type="text" />

        <div className="form-row">User Name</div>
        <input className="select-button-1" type="email" />

        <div className="payment-description-main">
          <div className="form-row">Password</div>
          <input className="select-button-2" type="password" />

          <div className="form-row">Confirm Password</div>
          <input className="select-button-2" type="password" />
        </div>

        <div className="signin-text">
          <Button className="signin" onClick={() => handleData(true)}>
            Sign Up
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
export default Create;
