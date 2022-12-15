import React, { Component } from "react";
import "../Dashboard.css";
import Internal from "./Internal";
import Create from "./CreateNew.js";
import { FORM } from "../Constants/PaymentForm";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignin: false,
      openSignup: false,
    };
  }

  closeSigninModel = () => {
    this.setState({ openSignin: false });
  };
  closeSignupModel = () => {
    this.setState({ openSignup: false });
  };
  openSigninModel = () => {
    this.setState({ openSignin: true });
  };
  openSignupModel = () => {
    this.setState({ openSignup: true, openSignin: false });
  };
  render() {
    const { openSignin, openSignup } = this.state;

    return (
      <div className="form-main1">
        <div className="online-payment">Online Payment</div>
        <div className="form-main2">
          {FORM.map((field) => {
            if (field.show) {
              if (field.type === "select") {
                return (
                  <div className="form-row" key={field.id}>
                    <div className="form-label">{field.label}</div>
                    <select
                      className={field.className}
                      disabled={field.disabled}
                    >
                      {field.options.map((option) => {
                        return (
                          <option key={option.id} value={option.id}>{option.label}</option>
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
            }
            else{
              return null
            }
          })}

          <div className="select-category">
            Select your category to proceed*
          </div>
          <div className="submit-button-main">
            <button
              className="internal-button"
              onClick={() => this.setState({ openSignin: true })}
            >
              Internal
            </button>
            <button className="external-button">External</button>
          </div>
          <div className="next-button-main">
            <button className="next-button">Next</button>
          </div>
        </div>
        <Internal
          open={openSignin}
          handleClose={this.closeSigninModel}
          openSignup={this.openSignupModel}
        />
        <Create open={openSignup} handleClose={this.closeSignupModel} />
      </div>
    );
  }
}

export default Payment;
