import "./mobileLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
function MobileLinks() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  return (
    <div className="mobile-container">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} className="fa-lg" />
      </button>
      <nav className={`mobile-modal-links ${showModal ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>
              <button>Shop</button>
              <FontAwesomeIcon icon={faChevronDown} className="fa-sm" />
            </span>
          </li>
          <li className="category-container">
            <div className="mobile-category">
              <ul>
                <li>
                  <Link to="/mens-clothing">Men's Clothing</Link>
                </li>
                <li>
                  <Link to="/womans-clothing">Woman's Clothing</Link>
                </li>
                <li>
                  <Link to="/jewelry">Jewelry</Link>
                </li>
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileLinks;
