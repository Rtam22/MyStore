import { useState } from "react";
import { productType } from "../data/products";

export type price = "$0 to $20" | "$20 to $50" | "$50 to $100" | " over$100";
export type size = "X-Small" | "Small" | "Medium" | "Large" | "X-Large";
type sort = "Newest" | "Price: High-Low" | "Price: Low-High" | "Featured";

export type filterValue = sort | boolean | price[] | size[];

export type filterType = {
  sort: sort;
  sales: boolean;
  price: price[];
  size: size[];
};

const initialFilter: filterType = {
  sales: false,
  price: [],
  size: [],
  sort: "Featured",
};

function UseFilters() {
  const [filterSettings, setFilterSettings] =
    useState<filterType>(initialFilter);

  function handleUpdateFilter<Filter>(
    value: Filter,
    filterKey: keyof filterType
  ) {
    if (filterKey === "price" || filterKey === "size") {
      const found = filterSettings[filterKey].find(
        (filter) => filter === value
      );
      setFilterSettings((prevState) => {
        const currentFilter = prevState[filterKey];
        return found
          ? {
              ...prevState,
              [filterKey]: currentFilter.filter(
                (item) => item !== (value as Filter)
              ),
            }
          : { ...prevState, [filterKey]: [...prevState[filterKey], value] };
      });
    }
  }

  function updateFilter(value: filterValue, filterKey: keyof filterType) {
    const filterKeyCase = filterKey.toLowerCase();
    switch (filterKeyCase) {
      case "price":
        handleUpdateFilter(value as price, filterKeyCase as keyof filterType);
        break;
      case "size":
        handleUpdateFilter(value as size, filterKeyCase as keyof filterType);
        break;
      case "sales":
        setFilterSettings({
          ...filterSettings,
          [filterKeyCase]: !filterSettings.sales,
        });
        break;
    }
  }

  function checkIfFiltersOff() {
    let isOff = true;
    if (filterSettings.price.length > 0) {
      isOff = false;
    }
    if (filterSettings.size.length > 0) {
      isOff = false;
    }
    if (filterSettings.sales === true) {
      isOff = false;
    }

    return isOff;
  }

  function applyFilters(items: productType[]) {
    if (checkIfFiltersOff()) {
      return items;
    }
    let filteredItems = [];
    if (filterSettings.price.length > 0) {
      filterSettings.price.forEach((filter) => {
        const result = [...handlePriceRange(filter, items)];
        filteredItems = Array.isArray(result)
          ? [...filteredItems, ...result]
          : [...filteredItems, result];
      });
    }
    if (filteredItems.length > 0 && filterSettings.size.length > 0) {
      const result = [...handleSizeRange(filterSettings.size, filteredItems)];
      filteredItems = Array.isArray(result) ? [...result] : [result];
    } else if (filterSettings.size.length > 0) {
      const result = handleSizeRange(filterSettings.size, items);
      filteredItems = Array.isArray(result) ? [...result] : [result];
    }

    if (filteredItems.length > 0 && filterSettings.sales === true) {
      filteredItems = filteredItems.filter((item) => item.discount > 0);
    } else if (filterSettings.sales === true) {
      filteredItems = items.filter((item) => item.discount > 0);
    }

    return filteredItems;
  }

  function handleSizeRange(sizeRange: string[], items: productType[]) {
    return items.filter((item) =>
      item.size.some((size) => sizeRange.includes(size))
    );
  }

  function handlePriceRange(priceRange: string, items: productType[]) {
    switch (priceRange) {
      case "$0 to $20":
        return items.filter((item) => item.salePrice <= 20);
      case "$20 to $50":
        return items.filter(
          (item) => item.salePrice > 20 && item.salePrice <= 50
        );
      case "$50 to $100":
        return items.filter(
          (item) => item.salePrice > 50 && item.salePrice <= 100
        );
      case "$100+":
        return items.filter((item) => item.salePrice > 100);
      default:
        return [];
    }
  }

  return { filterSettings, updateFilter, applyFilters };
}

export default UseFilters;
