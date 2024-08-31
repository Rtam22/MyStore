import "./filterSection.css";
import { filterModalProps } from "./filterTypes";
import React, { useState } from "react";
import { filterValue, filterType } from "../../hooks/useFilters";
import { getFirstWord } from "../../utils/textFormatUtils";
import { sortType } from "../../pages/category";

function FilterSection({
  filters,
  updateFilter,
  filterSettings,
  handleHideFilter,
  sale,
}: filterModalProps) {
  function handleSort(event: sortType) {
    updateFilter(event, "sort");
  }

  function handlefilter(value: filterValue, filterTitle: keyof filterType) {
    const title = getFirstWord(filterTitle);
    updateFilter(value, title as keyof filterType);
  }

  function handleChecked(value: string, filterTitle: string) {
    switch (filterTitle) {
      case "sale":
        return sale;
      case "Price":
        const filterPriceActive = filterSettings.price.find(
          (filter) => filter === value
        );
        if (filterPriceActive) {
          return true;
        } else {
          return false;
        }
      case "Size":
        const filterSaleActive = filterSettings.size.find(
          (filter) => filter === value
        );
        if (filterSaleActive) {
          return true;
        } else {
          return false;
        }
    }
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
              checked={handleChecked(value, filterTitle)}
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
      <div className="sort-container mobile">
        <p className="filter-button">Sort</p>
        <div className="sort-container mobile">
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
        <hr />
      </div>

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
      <button className="apply-button" onClick={handleHideFilter}>
        Apply Filters
      </button>
    </div>
  );
}

export default FilterSection;
