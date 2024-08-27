import "./rightColBar.css";
import ItemCard from "../common/itemCard";
import { productType } from "../../data/products";
interface rightColBarProps {
  items: productType[];
  category?: string;
  subCategory?: string;
  hideFilter: boolean;
}
function RightColBar({ items, hideFilter }: rightColBarProps) {
  function listItems() {
    return items.map((item, index) => {
      return <ItemCard key={index} item={item} size="small" />;
    });
  }

  return (
    <div className={`col-right ${hideFilter ? "extend" : ""}`}>
      <div className="items-container">{listItems()}</div>
    </div>
  );
}

export default RightColBar;
