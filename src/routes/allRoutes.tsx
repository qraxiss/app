import { Navigate } from "react-router-dom";

import TrendFashion from "pages/home/TrendFashion/index";

//Catalog
import Catalog from "pages/catalog";
//shop
import ShopIndex from "pages/shop";
import Trackorder from "pages/shop/Trackorder";
import PaymentIndex from "pages/shop/Indexpayment";
import Review from "pages/shop/Review";
import Confirm from "pages/shop/Confirm";
import Orderhistory from "pages/shop/Orederhistory";
import Shopingcard from "pages/shop/Shopingcard";
import Checkout from "pages/shop/Checkout";
import WishList from "pages/shop/WhishList";

//pages /product / grid
import Defaultgrid from "pages/product/Grid/Default";
import ProductSidebar from "pages/product/Grid/ProductSideBar";
import RightSidebar from "pages/product/Grid/RightSidebar";
import Nosider from "pages/product/Grid/Nosidebar";

//pages /product / list
import Listdefault from "pages/product/List/Default";
import LeftsideBar from "pages/product/List/LeftSideBar";
import Leftrightsidebar from "pages/product/List/Leftrightsidebar";
import Listnoslider from "pages/product/List/Listnosider";

//pages /user
import MyAccount from "pages/User/MyAccount";
import SignUp from "pages/User/SignUp";
import Signin from "pages/User/SignIn";
import Passwordreset from "pages/User/Passwordreset";
import Passwordcreate from "pages/User/Passwordcreate";
import Successmsg from "pages/User/Successmsg";
import Verifyemail from "pages/User/Verifyemail";
import Logout from "pages/User/Logout";
import Error404 from "pages/User/Error404";
import Error500 from "pages/User/Error500";
import Comingsoon from "pages/User/Comingsoon";

//pages / Email
import Blackfriday from "pages/product/Email Product/Blackfriday";
import Flashsale from "pages/product/Email Product/Flashsale";
import Ordersuccess from "pages/product/Email Product/Ordersuccess";
import Ordersuccess2 from "pages/product/Email Product/Ordersuccess2";


//Productdetails
import Productdetails from "pages/product/Productdetails";

//categories
import Categories from "pages/product/Categories";

//about
import About from "pages/product/About";

//Purchase Guide
import Purchaseguide from "pages/product/Purchaseguide";

//Terms of Conditions
import Termsconditions from "pages/product/Termsconditions";

//Privacy Policy
import Privacypolicy from "pages/product/Privacypolicy";

//Storelocator
import Storelocator from "pages/product/Storelocator";

//FAQ
import FAQ from "pages/product/FAQ";

//Invoice
import Invoice from "pages/product/Invoice";

//contact
import ContactUs from "pages/contact-us/Contact";
import Home from "pages/home";

const authProtectedRoutes = [
    { path: "/", component: <Home /> },

    //catalog
    { path: "/catalog/clothing", component: <Catalog /> },
    { path: "/product-list/left", component: <LeftsideBar /> },
    { path: "/products-grid/right", component: <RightSidebar /> },

    //shop
    { path: "/shop/address", component: <ShopIndex /> },
    { path: "/shop/order", component: <Trackorder /> },
    { path: "/shop/payment", component: <PaymentIndex /> },
    { path: "/shop/review", component: <Review />, isLight: "light" },
    { path: "/shop/confirm", component: <Confirm /> },
    { path: "/shop/orderhistory", component: <Orderhistory /> },
    { path: "/shop/shopingcard", component: <Shopingcard /> },
    { path: "/shop/checkout", component: <Checkout /> },
    { path: "/shop/wishList", component: <WishList /> },

    //pages
    //Product
    //grid
    { path: "/products-grid/Default", component: <Defaultgrid /> },
    { path: "/products-grid/sidebar-banner", component: <ProductSidebar /> },
    { path: "/products-grid/right", component: <RightSidebar /> },
    { path: "/products-grid", component: <Nosider /> },
    //list
    { path: "/product-list/defualt", component: <Listdefault /> },
    { path: "/product-list/left", component: <LeftsideBar /> },
    { path: "/product-list/right", component: <Leftrightsidebar /> },
    { path: "/product-list", component: <Listnoslider /> },


    //Productdetails
    { path: "/product-details", component: <Productdetails /> },

    //user
    //My Account
    { path: "/account", component: <MyAccount /> },

    //categories
    { path: "/products-category", component: <Categories /> },
    //about
    { path: "/about-us", component: <About /> },
    //Purchase Guide
    { path: "/purchase-guide", component: <Purchaseguide /> },
    //Terms of Conditions
    { path: "/terms-conditions", component: <Termsconditions /> },
    //Privacy Policy
    { path: "/privacy-policy", component: <Privacypolicy /> },
    //Storelocator
    { path: "/store-locator", component: <Storelocator /> },
    //FAQ
    { path: "/ecommerce-faq", component: <FAQ /> },
    //Invoice
    { path: "/invoice", component: <Invoice /> },
    //contact us
    { path: "/contact", component: <ContactUs /> },

    { path: "*", component: <Navigate to="/" /> },
]

const publicRoutes = [
    //user
    //Signin
    { path: "/auth-signin-basic", component: <Signin /> },
    //SignUp
    { path: "/auth-signup-basic", component: <SignUp /> },
    //Passwordreset
    { path: "/auth-pass-reset-basic", component: <Passwordreset /> },
    //Passwordcreate
    { path: "/auth-pass-change-basic", component: <Passwordcreate /> },
    //Successmsg
    { path: "/auth-success-msg-basic", component: <Successmsg /> },
    //Verifyemail
    { path: "/auth-twostep-basic", component: <Verifyemail /> },
    //Logout
    { path: "/auth-logout-basic", component: <Logout /> },
    //error 404
    { path: "/auth-404", component: <Error404 /> },
    //error 500
    { path: "/auth-500", component: <Error500 /> },
    //Comingsoon
    { path: "/coming-soon", component: <Comingsoon /> },

    //email
    //Blackfriday
    { path: "/email-black-friday", component: <Blackfriday /> },
    //Flashsale
    { path: "/email-flash-sale", component: <Flashsale /> },
    //oreder success
    { path: "/email-order-success", component: <Ordersuccess /> },
    //Ordersuccess2
    { path: "/email-order-success-2", component: <Ordersuccess2 /> },
]

export { authProtectedRoutes, publicRoutes };