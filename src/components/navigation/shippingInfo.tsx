import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function ShippingInfo() {
  return (
    <span>
      <p>Free shipping for orders over $100!</p>
      <FontAwesomeIcon
        icon={faTruck}
        style={{ color: "rgb(243, 243, 243)" }}
        className="fa-sm"
      />
    </span>
  );
}

export default ShippingInfo;
