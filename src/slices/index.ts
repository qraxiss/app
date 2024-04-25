import { combineReducers } from "@reduxjs/toolkit";

import LayoutReducer from "./layouts/reducer";
import categoryReducer from "./category/slice";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    categories: categoryReducer,
})

export default rootReducer;