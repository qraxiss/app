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

//pages /user
import MyAccount from "pages/user/my-account";

//contact
import ContactUs from "pages/contact-us/contact";

const authProtectedRoutes = [
    //catalog
    // { path: "/catalog/clothing", component: <Catalog /> },
    // { path: "/product-list/left", component: <LeftsideBar /> },
    // { path: "/products-grid/right", component: <RightSidebar /> },

    //shop
    // { path: "/shop/address", component: <ShopIndex /> },
    // { path: "/shop/order", component: <Trackorder /> },
    // { path: "/shop/payment", component: <PaymentIndex /> },
    // { path: "/shop/review", component: <Review />, isLight: "light" },
    // { path: "/shop/confirm", component: <Confirm /> },
    // { path: "/shop/orderhistory", component: <Orderhistory /> },
    // { path: "/shop/shopingcard", component: <Shopingcard /> },
    // { path: "/shop/checkout", component: <Checkout /> },
    // { path: "/shop/wishList", component: <WishList /> },

    //My Account
    { path: "/account", component: <MyAccount /> },

    //contact us
    { path: "/contact", component: <ContactUs /> },

    { path: "*", component: <Navigate to="/" /> },
];

export { authProtectedRoutes };
