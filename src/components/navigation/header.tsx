import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import ShippingInfo from "./shippingInfo";
import Logo from "./logo";
import ShowSearch from "./showSearch";
import Cart from "./cart";
import NavigationLinks from "./navigationLinks";
import MobileLinks from "./mobileLinks";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ScrollerContext } from "../../context/scrollerContext";

export type activeHeaderTypes = "navigation" | "cart" | "search" | "none";
export type activeHeaderProps = {
  activeHeader?: activeHeaderTypes;
  handleActiveHeader?: (activeHeader: activeHeaderTypes) => void;
  handleModal?: () => void;
  showModal?: boolean;
};

function Header() {
  const [activeHeader, setActiveHeader] = useState<activeHeaderTypes>();
  const { showHeader, shiftPosition } = useContext(ScrollerContext);
  const { showModal, handleModal } = useContext(CartContext);
  function handleActiveHeader(activeHeader: activeHeaderTypes) {
    setActiveHeader(activeHeader);
  }

  useEffect(() => {
    if (showModal) {
      setActiveHeader("cart");
    }
  }, [showModal]);

  return (
    <>
      <div className="header-top">
        <ShippingInfo />
      </div>
      <div className={`header-container ${showHeader ? "" : "hidden"}`}>
        <div className="header-middle">
          <Link to="/">Register</Link>
          <Link to="/">Login</Link>
        </div>
        <div className="header-bottom">
          <Logo />
          <div className="header-bottom-right">
            <NavigationLinks />
            <ShowSearch />
            <Cart
              showHeader={showHeader}
              shiftPosition={shiftPosition}
              activeHeader={activeHeader}
              handleActiveHeader={handleActiveHeader}
            />
          </div>
          <div className="mobile-bottom-right">
            <ShowSearch
              activeHeader={activeHeader}
              handleActiveHeader={handleActiveHeader}
              handleModal={handleModal}
              showModal={showModal}
            />
            <Cart
              activeHeader={activeHeader}
              handleActiveHeader={handleActiveHeader}
            />
            <MobileLinks
              activeHeader={activeHeader}
              handleActiveHeader={handleActiveHeader}
              handleModal={handleModal}
              showModal={showModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
