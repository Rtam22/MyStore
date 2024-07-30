import React, { useState, useEffect } from "react";
import "./header.css";
import SocialMediaLinks from "./socialMediaLinks";
import ShippingInfo from "./shippingInfo";
import Logo from "./logo";
import ShowSearch from "./showSearch";
import Cart from "./cart";
import NavigationLinks from "./navigationLinks";
import MobileLinks from "./mobileLinks";
import { Link } from "react-router-dom";
function Header() {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [showHeader, setShowHeader] = useState(true);

  function handleScroll() {
    if (window.scrollY < prevYPosition || window.scrollY < 800) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setPrevYPosition(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="header-top">
        <ShippingInfo />
      </div>
      <div className={`header-container ${showHeader ? "" : "hidden"}`}>
        <div className="header-middle">
          <Link to="/">Track Order</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Register</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="header-bottom">
          <Logo />
          <div className="header-bottom-right">
            <NavigationLinks />
            <ShowSearch />
            <Cart />
          </div>
          <div className="mobile-bottom-right">
            <ShowSearch />
            <Cart />
            <MobileLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
