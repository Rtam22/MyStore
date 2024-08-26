import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Header from "./components/navigation/header";
import React from "react";
import { CartProvider } from "./context/cartContext";
import Cart from "./pages/cart";
import Search from "./pages/search";
import NotFound from "./pages/notFound";
import { ScrollerProvider } from "./context/scrollerContext";
function App() {
  return (
    <CartProvider>
      <ScrollerProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName/:productId" element={<Product />} />
            <Route
              path="/:categoryName_:subcategoryName"
              element={<Category />}
            />
            <Route path="/:categoryName/" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/" element={<Search />} />
            <Route path="not-found" element={<NotFound />} />
          </Routes>
        </Router>
      </ScrollerProvider>
    </CartProvider>
  );
}

export default App;
