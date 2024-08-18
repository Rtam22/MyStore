import { useEffect, useState } from "react";
import "./leftColBar.css";
import FilterSection from "./filterSection";
import { allFilterProps } from "./filterTypes";
import SubCategorySection from "./subCategorySection";
import { formatTitle } from "../../utils/textFormatUtils";
import { getLastParamLink } from "../../utils/textFormatUtils";
import { sortType } from "../../pages/category";
function LeftColBar({
  allfilters,
  categoryTitle,
  isSubCategory,
  sortFilter,
}: allFilterProps) {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [shiftPosition, setShiftPosition] = useState<boolean>(false);
  const [extendFilter, setExtendFilter] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", handleEvent);
    return () => document.removeEventListener("scroll", handleEvent);
  });

  function handleEvent() {
    window.scrollY > 10 ? setExtendFilter(true) : setExtendFilter(false);

    if (window.scrollY < prevYPosition || window.scrollY < 800) {
      setShiftPosition(false);
    } else {
      setShiftPosition(true);
    }
    setPrevYPosition(window.scrollY);
  }

  function handleSortFilter(filter: sortType) {}

  function handleHideFilter() {
    console.log("close");
  }

  function findSubCategoryByUrl() {
    const subCategory = allfilters.subCategoryTypes.find(
      (subCategory) => getLastParamLink(subCategory.url) === categoryTitle
    );
    if (!subCategory.filters) {
      return allfilters.filterTypes;
    }
    return subCategory.filters;
  }

  return (
    <div className="col-left">
      <div
        className={`filter-modal ${shiftPosition ? "shift" : ""} ${
          extendFilter ? "extend" : ""
        }`}
      >
        <div className="filter-control-container">
          <h2>{formatTitle(categoryTitle)}</h2>
          <div className="filter-type-container">
            <button>Hide Filter</button>
            <select
              name="filter-type"
              id="filter-type"
              value={sortFilter}
              onChange={(e) => handleSortFilter(e.target.value as sortType)}
            >
              <option value="Featured">Featured</option>
              <option value="Price: High-Low">Price: High-Low</option>
              <option value="Price: Low-High">Price: Low-High</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="filter-top">
          <h3>Filter</h3>
        </div>
        <div className="scroller-container">
          <SubCategorySection subCategory={allfilters.subCategoryTypes} />
          <FilterSection
            filters={
              isSubCategory ? findSubCategoryByUrl() : allfilters.filterTypes
            }
            subCategoryTitle={categoryTitle}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftColBar;
