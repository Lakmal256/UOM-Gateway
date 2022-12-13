import ResponsiveDrawer from "../Components/Sidebar";
import Header from "../Components/Header";
import PaymentForm from "../Components/PaymentForm";
const PaymentPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ResponsiveDrawer />
      </div>
      <div><PaymentForm/></div>
    </div>
  );
};

export default PaymentPage;
