import { Navigate } from "react-router-dom";

//pages /user
import MyAccount from "pages/user/my-account";

//contact
import ContactUs from "pages/contact-us/contact";

const authProtectedRoutes = [

  //My Account
  { path: "/account", component: <MyAccount /> },

  //contact us
  { path: "/contact", component: <ContactUs /> },

  { path: "*", component: <Navigate to="/" /> },
];

export { authProtectedRoutes };
