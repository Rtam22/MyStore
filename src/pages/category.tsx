import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.css";
import LeftColBar from "../components/category/leftColBar";
import RightColBar from "../components/category/rightColBar";
import { products } from "../data/products";
import {
  maleClothingFilters,
  femaleClothingFilters,
  electronicsFilters,
  jewelryFilters,
} from "../data/categoryFilters";

type categoryItem = {
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  rating: number;
};

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
  const [items, setItems] = useState<categoryItem[]>([]);

  useEffect(() => {
    console.log(categoryName);
  }, [categoryName]);

  return (
    <div className="category content">
      <div className="top-bar">
        <p>home / shop / men's clothing </p>
      </div>
      <div className="flex">
        <LeftColBar
          allfilters={categoryOptions(categoryName)}
          categoryTitle={categoryName}
        />
        <RightColBar items={products} category={categoryName} />
      </div>
    </div>
  );
}

export default Category;
