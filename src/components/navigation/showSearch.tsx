import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./searchModal";
import "./showSearch.css";
import React, { useState } from "react";
function ShowSearch() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  return (
    <>
      <div className="search-container">
        <input className="search" type="search" placeholder="Search"></input>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-lg" />
        </button>
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
