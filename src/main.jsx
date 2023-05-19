import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductsContext from "./context/Products";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <ProductsContext>
        <App />
      </ProductsContext>
    </BrowserRouter>
  </React.Fragment>
);
