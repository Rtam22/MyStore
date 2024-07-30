import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryItem } from "../components/common/scroller/scrollerTypes";

function Product() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [items, setItems] = useState<categoryItem[]>([]);
  useEffect(() => {
    console.log(categoryName);
  }, [categoryName]);
  return <div>Category: {categoryName}</div>;
}

export default Product;
