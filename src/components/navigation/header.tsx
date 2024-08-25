import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import SocialMediaLinks from "./socialMediaLinks";
import ShippingInfo from "./shippingInfo";
import Logo from "./logo";
import ShowSearch from "./showSearch";
import Cart from "./cart";
import NavigationLinks from "./navigationLinks";
import MobileLinks from "./mobileLinks";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export type activeHeaderTypes = "navigation" | "cart" | "search" | "none";
export type activeHeaderProps = {
  activeHeader?: activeHeaderTypes;
  handleActiveHeader?: (activeHeader: activeHeaderTypes) => void;
  handleModal?: () => void;
  showModal?: boolean;
};

function Header() {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [shiftPosition, setShiftPosition] = useState<boolean>(false);
  const [activeHeader, setActiveHeader] = useState<activeHeaderTypes>();
  const { showModal, handleModal } = useContext(CartContext);
  function handleActiveHeader(activeHeader: activeHeaderTypes) {
    setActiveHeader(activeHeader);
  }

  useEffect(() => {
    if (showModal) {
      setActiveHeader("cart");
    }
    console.log(activeHeader);
  }, [showModal]);

  function handleScroll() {
    if (window.scrollY > 0) {
      setShiftPosition(true);
    } else {
      setShiftPosition(false);
    }
    if (window.scrollY < prevYPosition || window.scrollY < 200) {
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
