import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchFunction() {
  const [searchInput, setSearchInput] = useState<string>();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    if (searchInput === undefined) {
      return;
    }

    event.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value as string);
          }}
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-lg" />
        </button>
      </form>
    </>
  );
}

export default SearchFunction;
