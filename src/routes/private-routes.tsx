import { Navigate, Outlet } from "react-router-dom";

//pages /user
import MyAccount from "pages/user/my-account";

const authProtectedRoutes = [

  //My Account
  { path: "/account", component: <MyAccount /> },

];

const PrivateRoutes = () => {
  const jwt = localStorage.getItem("jwt");
  return(
    jwt ? <Outlet /> : <Navigate to="/"/>
  );
};


export { authProtectedRoutes, PrivateRoutes };
