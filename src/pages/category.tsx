import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { determineCategory } from "../utils/textFormatUtils";

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

function categoryOptions(categoryName) {
  switch (categoryName) {
    case "mens-clothing":
      return maleClothingFilters;
    case "womans-clothing":
      return femaleClothingFilters;
    case "jewelry":
      return jewelryFilters;
    case "electronics":
      return electronicsFilters;
  }
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [items, setItems] = useState<productType[]>(products);
  const { filterSettings, updateFilter, applyFilters } = useFilters();
  const [hideFilter, setHideFilter] = useState<boolean>();
  const categories = determineCategory(categoryName);
  const passCategory = categories.secondaryCategory
    ? categories.secondaryCategory
    : categories.mainCategory;
  useEffect(() => {
    setItems(applyFilters(products));
  }, [filterSettings]);

  function handleHideLeftFilter(value: boolean) {
    setHideFilter(value);
  }

  return (
    <div className="category content">
      <div className="top-bar">
        <p>home / shop / men's clothing </p>
      </div>
      <div className="flex">
        <LeftColBar
          allfilters={categoryOptions(categories.mainCategory)}
          categoryTitle={passCategory}
          updateFilter={updateFilter}
          filterSettings={filterSettings}
          handleHideLeftFilter={handleHideLeftFilter}
          isSubCategory={categories.secondaryCategory ? true : false}
        />
        <RightColBar
          items={items}
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
