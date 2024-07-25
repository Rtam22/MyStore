import React from "react";
import "./header.css";
import SocialMediaLinks from "./socialMediaLinks";
import ShippingInfo from "./shippingInfo";
import Logo from "./logo";
import ShowSearch from "./showSearch";
import Cart from "./cart";
import NavigationLinks from "./navigationLinks";
import MobileLinks from "./mobileLinks";
function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <ShippingInfo />
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
  );
}

export default Header;
