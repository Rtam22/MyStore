import "./itemList.css";
import { productType } from "../../data/products";
import ItemCard from "./itemCard";

type ItemListProp = {
  items: productType[];
  size: "small" | "large";
};

function ItemList({ items, size }: ItemListProp) {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <ItemCard item={item} size={size} />;
      })}
    </div>
  );
}

export default ItemList;
