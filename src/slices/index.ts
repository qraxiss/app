import { combineReducers } from "@reduxjs/toolkit";

import LayoutReducer from "slices/layouts/reducer";
import categoryReducer from "slices/category/slice";
import sideBarReducer from "slices/sidebar/slice";
import newArrivalsReducer from "slices/new-arrivals/slice";
import hotDealsReducer from "slices/hot-deals/slice";
import walletReducer from "slices/wallet/slice";
import userReducer from "slices/user/slice";
import wishlistReducer from "slices/wishlist/slice";
import cartReducer from "slices/cart/slice";
import orderReducer from "slices/order/slice";
import cryptoMarketReducer from "slices/crypto-market/slice";
import addressReducer from "slices/address/slice";
import shippingReducer from "slices/shipping/slice";
import selectedIconReducer from "slices/selected-icon/slice";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  categories: categoryReducer,
  sideBar: sideBarReducer,
  newArrivals: newArrivalsReducer,
  hotDeals: hotDealsReducer,
  wallet: walletReducer,
  user: userReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  order: orderReducer,
  cryptoMarket: cryptoMarketReducer,
  address: addressReducer,
  shipping: shippingReducer,
  selectedIcon: selectedIconReducer,
});

export default rootReducer;
