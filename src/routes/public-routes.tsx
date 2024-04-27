import Home from "pages/home";
import Products from "pages/products";
import Error404 from "pages/user/error-404";
import Error500 from "pages/user/error-500";
import Logout from "pages/user/logout";
import PasswordReset from "pages/user/password-reset";
import SignIn from "pages/user/sign-in";
import SignUp from "pages/user/sign-up";
import VerifyEmail from "pages/user/verify-email";

export const publicRoutes = [
    // Home
    { path: "/", component: <Home /> },
    // product list
    { path: "/products/:slug", component: <Products /> },
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
    //error 404
    { path: "/404", component: <Error404 /> },
    //error 500
    { path: "/500", component: <Error500 /> },
];
