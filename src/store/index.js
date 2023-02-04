import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import cart from "./cart";
import products from "./products";

const reducer = combineReducers({
  cart,
  products,
});

const store = configureStore({ reducer });

export default store;
