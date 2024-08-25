import { useEffect, useState } from "react";
import "./leftColBar.css";
import FilterSection from "./filterSection";
import { allFilterProps } from "./filterTypes";
import SubCategorySection from "./subCategorySection";
import { formatTitle } from "../../utils/textFormatUtils";
import { getLastParamLink } from "../../utils/textFormatUtils";
import { useParams } from "react-router-dom";

type sortType = "Newest" | "Price: High-Low" | "Price: Low-High" | "Featured";

function LeftColBar({
  allfilters,
  categoryTitle,
  isSubCategory,
  updateFilter,
  filterSettings,
  handleHideLeftFilter,
}: allFilterProps) {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [shiftPosition, setShiftPosition] = useState<boolean>(false);
  const [extendFilter, setExtendFilter] = useState<boolean>(false);
  const [hideFilter, setHideFilter] = useState<boolean>(false);
  const { categoryName } = useParams();

  useEffect(() => {
    document.addEventListener("scroll", handleEvent);
    return () => document.removeEventListener("scroll", handleEvent);
  });

  function handleEvent() {
    window.scrollY > 10 ? setExtendFilter(true) : setExtendFilter(false);
    let screenWidth = window.innerWidth;
    if (window.scrollY < prevYPosition || window.scrollY < 200) {
      setShiftPosition(false);
    } else {
      setShiftPosition(true);
    }
    setPrevYPosition(window.scrollY);
  }

  function handleHideFilter() {
    handleHideLeftFilter(!hideFilter);
    setHideFilter(!hideFilter);
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

  function handleSort(event: sortType) {
    updateFilter(event, "sort");
  }

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (hideFilter && screenWidth < 850) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0px";
    };
  });

  return (
    <div className={`col-left ${hideFilter ? "hide" : ""}`}>
      <div
        className={`filter-modal ${shiftPosition ? "shift" : ""} ${
          extendFilter ? "extend" : ""
        }`}
      >
        <div className="filter-control-container">
          <h2>{formatTitle(categoryTitle)}</h2>
          <div className="filter-type-container">
            <button className="filter-button-sort" onClick={handleHideFilter}>
              {hideFilter ? "Show Filters" : "Hide Filters"}
            </button>
            <button onClick={handleHideFilter} className="mobile-filter-button">
              Filters
            </button>
            <div className="sort-container">
              <select
                name="filter-type"
                id="filter-type"
                value={filterSettings.sort}
                onChange={(e) => handleSort(e.target.value as sortType)}
              >
                <option value="Featured">Featured</option>
                <option value="Price: High-Low">Price: High-Low</option>
                <option value="Price: Low-High">Price: Low-High</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className={`scroller-container ${
            shiftPosition ? "scroll-shift" : ""
          } ${extendFilter ? "scroll-extend" : ""}  ${
            hideFilter ? "" : "show"
          }`}
        >
          <SubCategorySection
            subCategory={allfilters.subCategoryTypes}
            currentCategory={getLastParamLink(categoryName)}
          />
          <FilterSection
            filters={
              isSubCategory ? findSubCategoryByUrl() : allfilters.filterTypes
            }
            subCategoryTitle={categoryTitle}
            updateFilter={updateFilter}
            filterSettings={filterSettings}
            handleHideFilter={handleHideFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftColBar;
