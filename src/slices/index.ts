import { combineReducers } from "@reduxjs/toolkit";

import LayoutReducer from "./layouts/reducer";
import categoryReducer from "./category/slice";
import sideBarReducer from "./sidebar/slice";
import newArrivalsReducer from "./new-arrivals/slice";
import hotDealsReducer from "./hot-deals/slice";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  categories: categoryReducer,
  sideBar: sideBarReducer,
  newArrivals: newArrivalsReducer,
  hotDeals: hotDealsReducer,
});

export default rootReducer;
