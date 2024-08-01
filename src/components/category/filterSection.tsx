import "./filterSection.css";
import { filterModalProps } from "./filterTypes";
import React, { useState } from "react";

function FilterSection({ filters }: filterModalProps) {
  const [showFilter, setShowFilter] = useState([false, false]);

  function handleShowFilters(i: number) {
    const newArray = showFilter.map((bool, index) => {
      if (index === i) {
        return !bool;
      } else {
        return bool;
      }
    });
    setShowFilter(newArray);
  }

  function filterType(type: string, filterValues: string[]) {
    switch (type) {
      case "checkbox":
        return filterValues.map((value, index) => (
          <div key={value + "-" + index} className="filter-container">
            <input type="checkbox" name="filter" id={`filter-${value}`} />
            <label htmlFor={`filter-${value}`}>{value}</label>
          </div>
        ));

      case "button":
        return;
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
            <button
              className="filter-button"
              onClick={() => handleShowFilters(1)}
            >
              {filter.title}
            </button>
            <div className="filter-details">
              {filterType(filter.filterType, filter.filterValues)}
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FilterSection;
