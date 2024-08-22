import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, productType } from "../data/products";
import ItemList from "../components/common/itemList";
import "./search.css";
function Search() {
  const [items, setItems] = useState<productType[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const paramArray = query.split(" ");
    const searchedItems = products
      .map((item) => {
        const itemTitle = item.title.replace(/-/g, "").toLowerCase();
        const matchCount = paramArray.reduce((count, param) => {
          return itemTitle.includes(param) ? count + 1 : count;
        }, 0);

        return { item, matchCount };
      })
      .sort((a, b) => b.matchCount - a.matchCount)
      .filter((itemData) => itemData.matchCount > 0)
      .map((itemData) => itemData.item);
    setItems(searchedItems);
  }, [searchParams]);

  return (
    <div className="content search">
      <h2>Search Results: {query}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default Search;
