import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Category" element={<CategoryPage />}/>
          <Route path="/Products/:id" element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
