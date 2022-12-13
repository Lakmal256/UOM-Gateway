import * as React from "react";
import AppBar from "@mui/material/AppBar";
import favicon from "../images/favicon.ico";
import "../Dashboard.css";

const Header = () => {
  return (
    <AppBar className="header" position="static">
      
      <div className="uom_header">
        <div className="uom-image">
          <img src={favicon} alt="firespot" />
        </div>
        <div className="header_text">UOM Payment Gateway</div>
      </div>
      
    </AppBar>
  );
};

export default Header;
