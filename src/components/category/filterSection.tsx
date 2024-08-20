import "./filterSection.css";
import { filterModalProps } from "./filterTypes";
import React, { useState } from "react";
import UseFilters from "../../hooks/useFilters";
import { filterValue, filterType } from "../../hooks/useFilters";
import { getFirstWord } from "../../utils/textFormatUtils";

function FilterSection({
  filters,
  subCategoryTitle,
  updateFilter,
}: filterModalProps) {
  const [showFilter, setShowFilter] = useState([false, false]);

  function handlefilter(value: filterValue, filterTitle: keyof filterType) {
    const title = getFirstWord(filterTitle);
    updateFilter(value, title as keyof filterType);
  }

  function filterType(
    type: string,
    filterValues: string[],
    filterTitle: string
  ) {
    switch (type) {
      case "checkbox":
        return filterValues.map((value, index) => (
          <div key={value + "-" + index} className="filter-container">
            <input
              type="checkbox"
              name="filter"
              id={`filter-${value}`}
              onChange={() =>
                handlefilter(
                  value as filterValue,
                  filterTitle as keyof filterType
                )
              }
            />
            <label htmlFor={`filter-${value}`}>{value}</label>
          </div>
        ));
      default:
        return null;
    }
  }

  return (
    <div className="filter-button-container">
      <hr />
      {filters.map((filter, index) => {
        return (
          <React.Fragment key={index}>
            <p className="filter-button">{filter.title}</p>
            <div className="filter-details">
              {filterType(filter.filterType, filter.filterValues, filter.title)}
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FilterSection;
