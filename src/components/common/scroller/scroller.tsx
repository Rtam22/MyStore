import { useRef, useState } from "react";
import Card from "../../home/card";
import ItemCard from "../itemCard";
import "./scroller.css";
import { scrollerProps } from "./scrollerTypes";

function Scroller({ items }: scrollerProps) {
  const [translateX, setTranslateX] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function handleRightScroll() {
    scrollerRef.current.scrollTo({
      left: scrollerRef.current.scrollLeft + 820,
      behavior: "smooth",
    });
  }

  function handleLeftScroll() {
    scrollerRef.current.scrollTo({
      left: scrollerRef.current.scrollLeft - 820,
      behavior: "smooth",
    });
  }

  return (
    <div className="promo-items-container">
      <button onClick={handleLeftScroll} className="scroller-button-left">
        {"<"}
      </button>
      <div
        className="scroller"
        id="scroller"
        ref={scrollerRef}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {items.map((item, index) => {
          return (
            <ItemCard
              key={index + item.title}
              title={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              href={item.href}
              size={item.size}
              price={item.price}
            />
          );
        })}
      </div>
      <button onClick={handleRightScroll} className="scroller-button-right">
        {">"}
      </button>
    </div>
  );
}

export default Scroller;
