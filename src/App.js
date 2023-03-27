// etc imports

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";

// Page import

import HomePage from "./pages/HomePage/";
import ContactPage from "./pages/ContactPage/";
import ProductPage from "./pages/ProductPage/";
import CheckoutPage from "./pages/CheckoutPage/";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage/";

// App function

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CheckoutPage />} />
          <Route path="checkoutsuccess" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </div>
  );
}
