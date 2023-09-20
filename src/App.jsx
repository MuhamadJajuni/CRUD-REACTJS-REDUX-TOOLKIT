/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ShowProducts from "./components/ShowProducts";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
