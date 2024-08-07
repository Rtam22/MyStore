import "./rightColBar.css";
import ItemCard from "../common/itemCard";
import { itemCardProps } from "../common/itemCardType";
import { productType } from "../../data/products";

interface rightColBarProps {
  items: productType[];
  category?: string;
  subCategory?: string;
}
function RightColBar({ items, category, subCategory }: rightColBarProps) {
  function findItems() {
    if (subCategory) {
      return items.map((item, index) => {
        if (
          category === item.mainCategory &&
          subCategory === item.subCategory
        ) {
          return <ItemCard key={index} {...item} size="small" />;
        }
      });
    } else if (category) {
      return items.map((item, index) => {
        if (category === item.mainCategory) {
          console.log(item);
          return <ItemCard key={index} {...item} size="small" />;
        }
      });
    }
  }

  return (
    <div className="col-right">
      <div className="items-container">{findItems()}</div>
    </div>
  );
}

export default RightColBar;
