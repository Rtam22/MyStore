import "./mobileLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LinkModal from "./linkModal";
import React, { useState } from "react";
import {
  mensClothingLinks,
  jewelryLinks,
  womansClothingLinks,
} from "../../data/linkData";
import { activeHeaderProps } from "./header";

function MobileLinks({
  activeHeader,
  handleActiveHeader,
  showModal,
  handleModal,
}: activeHeaderProps) {
  function handleClick() {
    if (activeHeader === "navigation") {
      handleActiveHeader("none");
    } else {
      if (showModal) {
        handleModal();
      }
      handleActiveHeader("navigation");
    }
  }

  return (
    <div className="mobile-container">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} className="fa-lg" />
      </button>
      <nav
        className={`mobile-modal-links scroller-container ${
          activeHeader === "navigation" ? "active" : ""
        }`}
      >
        <ul>
          <li>
            <Link className="main-category" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="main-category" to="/mens-clothing">
              Men's Clothing
            </Link>
            <hr />
          </li>
          <div className="mobile-category">
            <LinkModal links={mensClothingLinks} />
          </div>
          <li>
            <Link className="main-category" to="/womans-clothing">
              Woman's Clothing
            </Link>
            <hr />
          </li>

          <div className="mobile-category">
            <LinkModal links={womansClothingLinks} />
          </div>
          <li>
            <Link className="main-category" to="/jewelry">
              Jewelry
            </Link>
            <hr />
          </li>
          <div className="mobile-category">
            <LinkModal links={jewelryLinks} />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default MobileLinks;
