import { Link } from "react-router-dom";
import LinkModal from "./linkModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import React from "react";
import "./navigationLinks.css";
import {
  mensClothingLinks,
  jewelryLinks,
  womansClothingLinks,
} from "../../data/linkData";

function NavigationLinks() {
  return (
    <nav className="navigation-container">
      <ul>
        <li>
          <Link to="/mens-clothing" className="main-link">
            Men's Clothing
          </Link>
          <LinkModal links={mensClothingLinks} />
        </li>

        <li>
          <Link to="/womans-clothing" className="main-link">
            Woman's Clothing
          </Link>
          <LinkModal links={womansClothingLinks} />
        </li>
        <li>
          <Link to="/jewelry" className="main-link">
            Jewelry
          </Link>
          <LinkModal links={jewelryLinks} />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
