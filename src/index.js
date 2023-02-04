import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Checkout from "./routes/Checkout";
import store from "./store/index";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
