import "./itemList.css";
import { productType } from "../../data/products";
import ItemCard from "./itemCard";

type ItemListProp = { items: productType[] };

function ItemList({ items }: ItemListProp) {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            title={item.title}
            image={item.image}
            imageAlt={item.imageAlt}
            href={item.href}
            size={"small"}
            price={item.price}
            discount={item.discount}
            salePrice={item.salePrice}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
