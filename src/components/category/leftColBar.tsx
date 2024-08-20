import { useEffect, useState } from "react";
import "./leftColBar.css";
import FilterSection from "./filterSection";
import { allFilterProps } from "./filterTypes";
import SubCategorySection from "./subCategorySection";
import { formatTitle } from "../../utils/textFormatUtils";
import { getLastParamLink } from "../../utils/textFormatUtils";

type sortType = "Newest" | "Price: High-Low" | "Price: Low-High" | "Featured";

function LeftColBar({
  allfilters,
  categoryTitle,
  isSubCategory,
  updateFilter,
  filterSettings,
}: allFilterProps) {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [shiftPosition, setShiftPosition] = useState<boolean>(false);
  const [extendFilter, setExtendFilter] = useState<boolean>(false);
  const [sort, setSort] = useState<sortType>("Featured");
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

  function handleSort(event: sortType) {
    updateFilter(event, "sort");
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
            updateFilter={updateFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftColBar;
