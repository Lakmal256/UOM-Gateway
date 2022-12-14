import "../Dashboard.css";
import Button from "@mui/material/Button";
import { STUDENT } from "../Constants/ProfileForm";
import UserProfile from "../images/user_profile.png";

const Profile = () => {
  return (
    <div>
      <div className="profile_form_header">
        <div className="profile_form_image_main">
          <img className="profile_form_image" src={UserProfile} alt="firespot" />
        </div>
        <div className="index_user_text_main" >
          <div className="index_text" >index Last Name First Name</div>
          <div className="user_name_text" >User Name</div>
        </div>
      </div>
      <hr className="hr_line" />
      <div className="payment_header">Student Information</div>

      {STUDENT.map((field) => {
        if (field.show) {
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
        } else {
          return null;
        }
      })}

      <div className="next-button-main">
        <Button className="next-button">Save</Button>
      </div>
    </div>
  );
};

export default Profile;
