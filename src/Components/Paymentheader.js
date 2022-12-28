import "../Dashboard.css";
import favicon from "../images/favicon.ico";
import landing_main1 from "../images/landing_main1.png";
import PaymentNew from "./PaymentNew";


const Paymentheader = () => {
  return (
    <div>
      <div className="uom-main">
        <div className="uom-image">
          <img src={favicon} alt="firespot" />
        </div>
        <div className="text-header">UOM Payment Management System</div>
      </div>
      <div className="heading-main1">
        <div className="heading-main2">
          <div>
            <button className="rainbow">Secure Payment</button>
          </div>

          <div className="heading">
            <span>Get the All Payments Ready in a Second</span>
          </div>
          <div className="description">
            <span>
              The University of Moratuwa is the country's leading technological
              higer education institution, succeeding locally and
              internationally. This gateway is for quick and secure university
              related payments.
            </span>
          </div>
        </div>
        <div className="heading-image">
          <img className="heading-image1" src={landing_main1} alt="firespot" />
        </div>
      </div>
      <div>
        <PaymentNew />
      </div>
    </div>
  );
};

export default Paymentheader;
