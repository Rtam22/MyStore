import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./searchModal";
import "./showSearch.css";
import React, { useState } from "react";
import SearchFunction from "./searchFunction";
function ShowSearch() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="search-container">
        <SearchFunction />
      </div>
      <div className="mobile-search-container">
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-lg" />
        </button>
        <SearchModal showModal={showModal} />
      </div>
    </>
  );
}

export default ShowSearch;
