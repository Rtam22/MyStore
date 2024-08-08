import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftColBar from "../components/category/leftColBar";
import RightColBar from "../components/category/rightColBar";
import {
  maleClothingFilters,
  femaleClothingFilters,
  electronicsFilters,
  jewelryFilters,
} from "../data/categoryFilters";
import { products } from "../data/products";
type categoryItem = {
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  rating: number;
};

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
  }
}

function SubCategory() {
  const { categoryName, subcategoryName } = useParams<{
    subcategoryName: string;
    categoryName: string;
  }>();
  const [items, setItems] = useState<categoryItem[]>([]);

  return (
    <div className="category content">
      <div className="top-bar">
        <p>home / shop / men's clothing </p>
      </div>
      <div className="flex">
        <LeftColBar
          allfilters={categoryOptions(categoryName)}
          categoryTitle={subcategoryName}
          isSubCategory={true}
        />
        <RightColBar
          items={products}
          category={categoryName}
          subCategory={subcategoryName}
        />
      </div>
    </div>
  );
}

export default SubCategory;
