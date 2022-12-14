import PaymentForm from "./Components/PaymentFormNew";
import Profile from "./Components/Profile";

export const RouteList = [
  {
    id: "payments",
    path: "/app/Payments",
    element: <PaymentForm/>,
  },
  {
    id: "profile",
    path: "/app/Profile",
    element: <Profile/>,
  },
];
