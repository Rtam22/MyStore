import "./rightColBar.css";
import ItemCard from "../common/itemCard";
import { itemCardProps } from "../common/itemCardType";
import { productType } from "../../data/products";
interface rightColBarProps {
  items: productType[];
  category?: string;
  subCategory?: string;
  hideFilter: boolean;
}
function RightColBar({
  items,
  category,
  subCategory,
  hideFilter,
}: rightColBarProps) {
  function listItems() {
    if (subCategory) {
      return items.map((item, index) => {
        if (
          category === item.mainCategory &&
          subCategory === item.subCategory
        ) {
          return (
            <ItemCard
              key={index}
              {...item}
              size="small"
              discount={item.discount}
              salePrice={item.salePrice}
            />
          );
        }
      });
    } else if (category) {
      return items.map((item, index) => {
        if (category === item.mainCategory) {
          return (
            <ItemCard
              key={index}
              {...item}
              size="small"
              discount={item.discount}
              salePrice={item.salePrice}
            />
          );
        }
      });
    }
  }

  return (
    <div className={`col-right ${hideFilter ? "extend" : ""}`}>
      <div className="items-container">{listItems()}</div>
    </div>
  );
}

export default RightColBar;
