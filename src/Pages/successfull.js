import React from "react";
import "../Styles/successfull.css";
import done from "../Images/done.png"



function Success() {
  return (
    <div className="image">
      <img src={done} alt="fireball"/>
    </div>
  );
}

export default Success;
