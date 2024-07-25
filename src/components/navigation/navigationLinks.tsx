import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import React from "react";
import "./navigationLinks.css";
function NavigationLinks() {
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
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={handleClick} ref={dropDownRef}>
            Shop <FontAwesomeIcon icon={faChevronDown} className="fa-sm" />
          </button>
          <div className={`dropdown-menu ${showDropDown && "active"}`}>
            <Link to="/category/mens-clothing">Men's Clothing</Link>
            <Link to="/category/womans-clothing">Woman's Clothing</Link>
            <Link to="/category/Jewelry">Jewelry</Link>
            <Link to="/category/Electronics">Electronics</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
