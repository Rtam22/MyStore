import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./searchModal";
import "./showSearch.css";
import SearchFunction from "./searchFunction";
import { activeHeaderProps } from "./header";

function ShowSearch({
  activeHeader,
  handleActiveHeader,
  handleModal,
  showModal,
}: activeHeaderProps) {
  function handleClick() {
    if (activeHeader === "search") {
      handleActiveHeader("none");
    } else {
      if (showModal === true) {
        handleModal();
      }
      handleActiveHeader("search");
    }
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
        <SearchModal activeHeader={activeHeader} />
      </div>
    </>
  );
}

export default ShowSearch;
