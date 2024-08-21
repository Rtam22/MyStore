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
          allfilters={categoryOptions(categoryName)}
          categoryTitle={categoryName}
          updateFilter={updateFilter}
          filterSettings={filterSettings}
          handleHideLeftFilter={handleHideLeftFilter}
        />
        <RightColBar
          items={items}
          category={categoryName}
          hideFilter={hideFilter}
        />
      </div>
    </div>
  );
}

export default Category;
