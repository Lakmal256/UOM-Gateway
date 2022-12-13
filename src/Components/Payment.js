import React, { Component } from "react";
import "../Dashboard.css";
import Internal from "../Components/Internal";
import Create from "./Create.js";

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
  openSignupModel = () => {
    this.setState({ openSignup: true, openSignin: false });
  };
  openSigninModel = () => {
    this.setState({ openSignin: true });
  };
  render() {
    const { openSignin, openSignup } = this.state;

    return (
      <div className="form-main1">
        <div className="online-payment">Online Payment</div>
        <div className="form-main2">
          <div>
            <div className="payment-category">Payment Category</div>

            <select className="select-menu">
              <option>Internal</option>
              <option>External</option>
              <option>Repeat</option>
            </select>
          </div>
          <div className="payment-amount-main">
            <div className="payment-amount">Payment Amount</div>

            <input
              placeholder="Payment"
              className="select-button"
              type="number"
            />
          </div>
          <div className="payment-description-main">
            <div className="payment-description">Payment Description</div>

            <input className="select-button" type="text" />
          </div>

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
          openSigninModel={this.openSigninModel}
        />
        <Create
          open={openSignup}
          handleClose={this.closeSignupModel}
          openSignupModel={this.openSignupModel}
        />
      </div>
    );
  }
}

export default Payment;
