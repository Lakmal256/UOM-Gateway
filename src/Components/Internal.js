import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../Dashboard.css";
import Student from "../images/Student.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Internal = ({ open, handleClose, openSignup }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useNavigate();

  const handleData = () => {
    setUser("");
    setPassword("");

    if (user === "" || password === "") {
      console.log("Please Enter User Name and Password");
    } else {
      history("/app");
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
          <div className="sign-in">Sign In</div>
          <div className="uom-user">UOM User</div>
        </div>
        <div>
          <hr />
        </div>
        <div className="form-row">User Name</div>
        <input
          onChange={(e) => setUser(e.target.value)}
          className="select-button-1"
          type="text"
        />
        <div className="payment-description-main">
          <div className="form-row">Password</div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="select-button-2"
            type="password"
          />
        </div>
        <div className="remember-me">
          <span>
            <input type="checkbox" />
            Remember Me
          </span>
          <div className="remember-me">Forgot Password</div>
        </div>
        <div className="signin-text">
          <Button className="signin" onClick={() => handleData()}>
            Sign in
          </Button>
        </div>
        <div className="hr-main">
          <hr className="hr" />
          or
          <hr className="hr" />
        </div>
        <div className="dont-have">
          <div>Don't have an Account ?</div>
          <div>
            <button className="create-new-one" onClick={openSignup}>
              <u>Create New One</u>
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default Internal;
