import ResponsiveDrawer from "../Components/Sidebar";
import Header from "../Components/Header";
import PaymentFormNew from "../Components/PaymentFormNew";
const PaymentPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ResponsiveDrawer />
      </div>
      <div><PaymentFormNew/></div>
    </div>
  );
};

export default PaymentPage;
