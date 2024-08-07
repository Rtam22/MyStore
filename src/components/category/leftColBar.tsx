import { useEffect, useState } from "react";
import "./leftColBar.css";
import FilterSection from "./filterSection";
import { allFilterProps } from "./filterTypes";
import SubCategorySection from "./subCategorySection";
import { formatTitle } from "../../utils/textFormatUtils";

function LeftColBar({ allfilters, categoryTitle }: allFilterProps) {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [shiftPosition, setShiftPosition] = useState(false);
  const [extendFilter, setExtendFilter] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", handleEvent);
    return () => document.removeEventListener("scroll", handleEvent);
  });

  function handleEvent() {
    window.scrollY > 10 ? setExtendFilter(true) : setExtendFilter(false);
    console.log(extendFilter);
    if (window.scrollY < prevYPosition || window.scrollY < 800) {
      setShiftPosition(false);
    } else {
      setShiftPosition(true);
    }
    setPrevYPosition(window.scrollY);
  }

  function handleHideFilter() {
    console.log("close");
  }

  return (
    <div className="col-left">
      <div
        className={`filter-modal ${shiftPosition ? "shift" : ""} ${
          extendFilter ? "extend" : ""
        }`}
      >
        <h2>{formatTitle(categoryTitle)}</h2>
        <div className="filter-top">
          <h3>Filter</h3> <button onClick={handleHideFilter}>X</button>
        </div>
        <div className="scroller-container">
          <SubCategorySection subCategory={allfilters.subCategoryTypes} />
          <FilterSection filters={allfilters.filterTypes} />
        </div>
      </div>
    </div>
  );
}

export default LeftColBar;
