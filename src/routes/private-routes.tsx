import { Navigate, Outlet } from "react-router-dom";

//pages /user
import MyAccount from "pages/user/my-account";
import Checkout from "pages/shop/checkout";
import Payment from "pages/shop/payment";

const authProtectedRoutes = [
  //My Account
  { path: "/account", component: <MyAccount /> },
  { path: "/checkout", component: <Checkout /> },
  { path: "/payment", component: <Payment /> },
];

const PrivateRoutes = () => {
  const jwt = localStorage.getItem("jwt");
  return jwt ? <Outlet /> : <Navigate to="/" />;
};

export { authProtectedRoutes, PrivateRoutes };
