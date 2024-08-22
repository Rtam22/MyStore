import "./searchModal.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchFunction from "./searchFunction";
type searchModalProps = {
  showModal: boolean;
};

function SearchModal({ showModal }: searchModalProps) {
  return (
    <div className={`search-modal ${showModal ? "active" : ""}`}>
      <SearchFunction />
    </div>
  );
}

export default SearchModal;
