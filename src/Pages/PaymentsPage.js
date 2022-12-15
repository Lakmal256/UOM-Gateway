import ResponsiveDrawer from "../Components/Sidebar";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { RouteList } from "../Routes";

const PaymentPage = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ResponsiveDrawer />
      </div>
      <div className="inner-main">
        {RouteList.map((route) => {
          if (route.path === location.pathname) {
            return (
              <div key={route.id}>
                {route.element}
              </div>
            );
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default PaymentPage;
