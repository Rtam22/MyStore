import "./searchModal.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type searchModalProps = {
  showModal: boolean;
};

function SearchModal({ showModal }: searchModalProps) {
  return (
    <div className={`search-modal ${showModal ? "active" : ""}`}>
      <input type="text"></input>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-xl" />
      </button>
    </div>
  );
}

export default SearchModal;
