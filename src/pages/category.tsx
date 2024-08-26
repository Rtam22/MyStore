import React, { useEffect, useState, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./category.css";
import LeftColBar from "../components/category/leftColBar";
import RightColBar from "../components/category/rightColBar";
import { products, productType } from "../data/products";
import {
  maleClothingFilters,
  femaleClothingFilters,
  electronicsFilters,
  jewelryFilters,
} from "../data/categoryFilters";
import useFilters from "../hooks/useFilters";
import { determineCategory, formatTitle } from "../utils/textFormatUtils";
import { ScrollerContext } from "../context/scrollerContext";

type categoryItem = {
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  rating: number;
};

export type sortType =
  | "Newest"
  | "Price: High-Low"
  | "Price: Low-High"
  | "Featured";

function categoryOptions(categoryName: string) {
  switch (categoryName) {
    case "mens-clothing":
      return maleClothingFilters;
    case "womans-clothing":
      return femaleClothingFilters;
    case "jewelry":
      return jewelryFilters;
    case "electronics":
      return electronicsFilters;
    default:
      return null;
  }
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [items, setItems] = useState<productType[]>(products);
  const { filterSettings, updateFilter, applyFilters } = useFilters();
  const [hideFilter, setHideFilter] = useState<boolean>();
  const categories = determineCategory(categoryName);
  console.log(categories);
  const { shiftPosition, showHeader, handlePauseScroll } =
    useContext(ScrollerContext);
  const passCategory = categories.secondaryCategory
    ? categories.secondaryCategory
    : categories.mainCategory;

  function fetchItems(items: productType[]) {
    if (categories.secondaryCategory) {
      return items.filter((item) => {
        if (
          categories.secondaryCategory === item.subCategory &&
          categories.mainCategory === item.mainCategory
        ) {
          return item;
        } else {
          return null;
        }
      });
    } else if (categories.mainCategory) {
      return items.filter((item) => {
        if (categories.mainCategory === item.mainCategory) {
          return item;
        } else {
          return null;
        }
      });
    } else return null;
  }

  useEffect(() => {
    setItems(applyFilters(products));
  }, [filterSettings]);

  function handleHideFilter() {
    setHideFilter(!hideFilter);
    if (window.innerWidth < 850) {
      handlePauseScroll(!hideFilter);
    }
  }

  function handleSort(event: sortType) {
    updateFilter(event, "sort");
  }

  const itemList = fetchItems(items);

  if (!categories.secondaryCategory && !categories.mainCategory) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="category content">
      <div className="top-bar">
        <p>home / shop / men's clothing </p>
      </div>
      <div className={`filter-control-container ${showHeader ? "" : "shift"}`}>
        <h2>{formatTitle(passCategory)}</h2>
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
      <div className="flex">
        <LeftColBar
          allfilters={categoryOptions(categories.mainCategory)}
          categoryTitle={passCategory}
          updateFilter={updateFilter}
          filterSettings={filterSettings}
          isSubCategory={categories.secondaryCategory ? true : false}
          handleHideFilter={handleHideFilter}
          hideFilter={hideFilter}
        />
        <RightColBar
          items={itemList}
          category={categories.mainCategory}
          subCategory={
            categories.secondaryCategory ? categories.secondaryCategory : null
          }
          hideFilter={hideFilter}
        />
      </div>
    </div>
  );
}

export default Category;
