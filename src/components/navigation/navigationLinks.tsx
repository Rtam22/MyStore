import { Link } from "react-router-dom";
import LinkModal from "./linkModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import React from "react";
import "./navigationLinks.css";
function NavigationLinks() {
  /*
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef<HTMLButtonElement>(null);
  function handleClick() {
    showDropDown ? setShowDropDown(false) : setShowDropDown(true);
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Element)
    ) {
      setShowDropDown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
   */

  const mensClothingLinks = [
    {
      title: "T-Shirts & Shirts",
      url: "/category/mens-clothing/tshirt",
    },
    {
      title: "Jackets & Hoodies",
      url: "/category/mens-clothing/jackets&hoodies",
    },
    {
      title: "Pants & Trousers ",
      url: "/category/mens-clothing/pants&trousers",
    },
    {
      title: "Shoes ",
      url: "/category/mens-clothing/shoes",
    },
  ];

  return (
    <nav className="navigation-container">
      <ul>
        <li>
          <Link to="/category/mens-clothing">Men's Clothing</Link>
          <LinkModal links={mensClothingLinks} />
        </li>

        <li>
          <Link to="/category/womans-clothing">Woman's Clothing</Link>
        </li>
        <li>
          <Link to="/category/jewelry">Jewelry</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
