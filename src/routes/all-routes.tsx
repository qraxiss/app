import { Navigate } from "react-router-dom";

//Catalog
import Catalog from "pages/catalog";
//shop
import ShopIndex from "pages/shop";
import Trackorder from "pages/shop/track-order";
import PaymentIndex from "pages/shop/index-payment";
import Review from "pages/shop/review";
import Confirm from "pages/shop/confirm";
import Orderhistory from "pages/shop/oreder-history";
import Shopingcard from "pages/shop/shoping-card";
import Checkout from "pages/shop/checkout";
import WishList from "pages/shop/whish-list";

//pages /product / grid
import Defaultgrid from "pages/product/grid/default";
import ProductSidebar from "pages/product/grid/product-side-bar";
import RightSidebar from "pages/product/grid/right-side-bar";
import Nosider from "pages/product/grid/no-side-bar";

//pages /product / list
import Listdefault from "pages/product/list/default";
import LeftsideBar from "pages/product/list/left-side-bar";
import Leftrightsidebar from "pages/product/list/left-right-side-bar";
import Listnoslider from "pages/product/list/list-no-sider";

//pages /user
import MyAccount from "pages/user/my-account";
import SignUp from "pages/user/sign-up";
import Signin from "pages/user/sign-in";
import Passwordreset from "pages/user/password-reset";
import Passwordcreate from "pages/user/password-create";
import Successmsg from "pages/user/success-msg";
import Verifyemail from "pages/user/verify-email";
import Logout from "pages/user/logout";
import Error404 from "pages/user/error-404";
import Error500 from "pages/user/error-500";
import Comingsoon from "pages/user/coming-soon";

//pages / Email
import Blackfriday from "pages/product/email-product/black-friday";
import Flashsale from "pages/product/email-product/flash-sale";
import Ordersuccess from "pages/product/email-product/order-success";
import Ordersuccess2 from "pages/product/email-product/order-success2";


//Productdetails
import Productdetails from "pages/product/product-details";

//categories
import Categories from "pages/product/categories";

//about
import About from "pages/product/about";

//Purchase Guide
import Purchaseguide from "pages/product/purchase-guide";

//Terms of Conditions
import Termsconditions from "pages/product/terms-conditions";

//Privacy Policy
import Privacypolicy from "pages/product/privacy-policy";

//Storelocator
import Storelocator from "pages/product/store-locator";

//FAQ
import FAQ from "pages/product/FAQ";

//Invoice
import Invoice from "pages/product/invoice";

//contact
import ContactUs from "pages/contact-us/contact";
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
];

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
];

export { authProtectedRoutes, publicRoutes };
