import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Header from "./components/navigation/header";
import SubCategory from "./pages/subCategory";
import React from "react";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName/" element={<Category />} />
        <Route
          path="/:categoryName/:subcategoryName"
          element={<SubCategory />}
        />
        <Route
          path="/:categoryName/:subcategoryName/:productId"
          element={<Product />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
