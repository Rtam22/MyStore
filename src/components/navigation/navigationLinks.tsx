import { Link } from "react-router-dom";
import LinkModal from "./linkModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import React from "react";
import "./navigationLinks.css";
function NavigationLinks() {
  const mensClothingLinks = [
    {
      title: "T-Shirts & Tops",
      url: "/mens-clothing/tshirts-&-tops",
    },
    {
      title: "Jackets & Hoodies",
      url: "/mens-clothing/jackets-&-hoodies",
    },
    {
      title: "Pants & Trousers ",
      url: "/mens-clothing/pants-&-trousers",
    },
    {
      title: "Shoes ",
      url: "/mens-clothing/shoes",
    },
  ];

  const womansClothingLinks = [
    {
      title: "Tops & Blouses",
      url: "/womans-clothing/tops-&-blouses",
    },
    {
      title: "Jackets & Coats",
      url: "/womans-clothing/jackets-&-coats",
    },
    {
      title: "Pants & Skirts ",
      url: "/womans-clothing/pants-&-skirts",
    },
    {
      title: "Shoes ",
      url: "/womans-clothing/shoes",
    },
  ];

  const jewelryLinks = [
    {
      title: "Necklaces & Pendants",
      url: "/jewelry/necklaces-&-pendants",
    },
    {
      title: "Earrings",
      url: "/jewelry/earrings",
    },
    {
      title: "Rings",
      url: "/jewelry/rings",
    },
    {
      title: "Watches",
      url: "/jewelry/watches",
    },
  ];

  const electronicLinks = [
    {
      title: "Mobile Phones",
      url: "/electronics/mobile-phones",
    },
    {
      title: "Laptops & Computers",
      url: "/electronics/laptops-&-computers",
    },
    {
      title: "Tablets",
      url: "/electronics/tablets",
    },
  ];

  return (
    <nav className="navigation-container">
      <ul>
        <li>
          <Link to="/mens-clothing">Men's Clothing</Link>
          <LinkModal links={mensClothingLinks} />
        </li>

        <li>
          <Link to="/womans-clothing">Woman's Clothing</Link>
          <LinkModal links={womansClothingLinks} />
        </li>
        <li>
          <Link to="/jewelry">Jewelry</Link>
          <LinkModal links={jewelryLinks} />
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
          <LinkModal links={electronicLinks} />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
