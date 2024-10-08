import { Earn } from "pages/earn";
import Home from "pages/home";
import ProductDetails from "pages/product-details";
import Products from "pages/products";
import Error404 from "pages/user/error-404";
import Error500 from "pages/user/error-500";
import Logout from "pages/user/logout";
import PasswordReset from "pages/user/password-reset";
import SignIn from "pages/user/sign-in";
import SignUp from "pages/user/sign-up";
import VerifyEmail from "pages/user/verify-email";
import Shopindex from "pages/shop";

export const publicRoutes = [
  // Home
  { path: "/", component: <Home /> },
  // product list
  { path: "/products/:slug", component: <Products /> },
  // product details
  { path: "/product-details/:slug", component: <ProductDetails /> },
  //address
  { path: "/address", component: <Shopindex /> },
  //Signin
  { path: "/auth/signin", component: <SignIn /> },
  //SignUp
  { path: "/auth/signup", component: <SignUp /> },
  //Passwordreset
  { path: "/auth/password-reset", component: <PasswordReset /> },
  //Verifyemail
  { path: "/auth/verify-email", component: <VerifyEmail /> },
  //Logout
  { path: "/auth/logout", component: <Logout /> },
  // Earn
  { path: "/earn", component: <Earn /> },
  //error 404
  { path: "/404", component: <Error404 /> },
  //error 500
  { path: "/500", component: <Error500 /> },
];
