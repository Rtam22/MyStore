import Card from "../../home/card";
import ItemCard from "../itemCard";
import "./scroller.css";
import { scrollerProps } from "./scrollerTypes";

function Scroller({ type, items }: scrollerProps) {
  return (
    <div className="scroller" id="scroller">
      {items.map((item, index) => {
        if (type === "category-card") {
          return (
            <Card
              key={item.title}
              title={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              type={type}
              href={item.href}
            />
          );
        } else if (type === "product-card") {
          return (
            <ItemCard
              key={index + item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
              href={item.href}
              size={item.size}
              price={item.price}
            />
          );
        }
      })}
    </div>
  );
}

export default Scroller;
