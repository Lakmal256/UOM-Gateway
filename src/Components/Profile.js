import "../Dashboard.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { STUDENT } from "../Constants/ProfileForm";
import UserProfile from "../images/user_profile.png";

const Profile = () => {
  const [dataSet, setDataSet] = useState({
    firstName: "",
    lastName: "",
    email: "",
    index: "",
    phone: "",
    address: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var newDataSet = JSON.parse(JSON.stringify(dataSet));
    newDataSet[name] = value;
    setDataSet(newDataSet);
  };

  return (
    <div>
      <div className="profile_form_header">
        <div className="profile_form_image_main">
          <img
            className="profile_form_image"
            src={UserProfile}
            alt="firespot"
          />
        </div>
        <div className="index_user_text_main">
          <div className="index_text">index Last Name First Name</div>
          <div className="user_name_text">User Name</div>
        </div>
      </div>
      <hr className="hr_line" />
      <div className="payment_header">Student Information</div>

      <div className="profile_form_main">
        {STUDENT.map((field) => {
            if (field.type === "select") {
              return (
                <div className="form-row" key={field.id}>
                  <div className="form-label">{field.label}</div>
                  <select className={field.className} disabled={field.disabled}>
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
                <div className="form-row-flex" key={field.left.id}>
                  <div className="form_row-left">
                    <div className="form-label">{field.left.label}</div>
                    <input
                      placeholder={field.left.label}
                      name={field.left.name}
                      className={field.left.className}
                      type={field.left.type}
                      disabled={field.left.disabled}
                      onChange={(e) => handleData(e)}
                      value={dataSet[field.left.name]}
                    />
                  </div>
                  <div className="form_row-right">
                    <div className="form-label">{field.right.label}</div>
                    <input
                      placeholder={field.right.label}
                      name={field.right.name}
                      className={field.right.className}
                      type={field.right.type}
                      disabled={field.right.disabled}
                      onChange={(e) => handleData(e)}
                      value={dataSet[field.right.name]}
                    />
                  </div>
                </div>
              );
              }
          
        })}
      </div>

      <div className="next-button-main">
        <Button className="next-button">Save</Button>
      </div>
    </div>
  );
};

export default Profile;
