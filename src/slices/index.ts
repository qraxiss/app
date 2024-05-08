import { combineReducers } from "@reduxjs/toolkit";

import LayoutReducer from "./layouts/reducer";
import categoryReducer from "./category/slice";
import sideBarReducer from "./sidebar/slice";
import newArrivalsReducer from "./new-arrivals/slice";
import hotDealsReducer from "./hot-deals/slice";
import walletReducer from "./wallet/slice";
import userReducer from "./user/slice";
import wishlistReducer from "./wishlist/slice";
import cartReducer from "./cart/slice";

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
});

export default rootReducer;
