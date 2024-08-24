import "./searchModal.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchFunction from "./searchFunction";
import { activeHeaderProps } from "./header";

function SearchModal({ activeHeader }: activeHeaderProps) {
  return (
    <div
      className={`search-modal ${activeHeader === "search" ? "active" : ""}`}
    >
      <SearchFunction />
    </div>
  );
}

export default SearchModal;
