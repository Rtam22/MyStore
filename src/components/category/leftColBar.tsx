import { useEffect, useState, useContext } from "react";
import "./leftColBar.css";
import FilterSection from "./filterSection";
import { allFilterProps } from "./filterTypes";
import SubCategorySection from "./subCategorySection";
import { formatTitle } from "../../utils/textFormatUtils";
import { getLastParamLink } from "../../utils/textFormatUtils";
import { useParams } from "react-router-dom";
import { ScrollerContext } from "../../context/scrollerContext";
type sortType = "Newest" | "Price: High-Low" | "Price: Low-High" | "Featured";

function LeftColBar({
  allfilters,
  categoryTitle,
  isSubCategory,
  updateFilter,
  filterSettings,
  handleHideFilter,
  hideFilter,
  sale,
}: allFilterProps) {
  const { categoryName } = useParams();
  const { shiftPosition, showHeader } = useContext(ScrollerContext);

  function findSubCategoryByUrl() {
    const subCategory = allfilters.subCategoryTypes.find(
      (subCategory) => getLastParamLink(subCategory.url) === categoryTitle
    );
    if (!subCategory.filters) {
      return allfilters.filterTypes;
    }
    return subCategory.filters;
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
          !showHeader ? "extend" : ""
        }`}
      >
        <div
          className={`scroller-container ${
            shiftPosition ? "scroll-shift" : ""
          } ${!showHeader ? "scroll-extend" : ""}  ${hideFilter ? "" : "show"}`}
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
            sale={sale}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftColBar;
