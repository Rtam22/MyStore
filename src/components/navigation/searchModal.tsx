import "./searchModal.css";
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
