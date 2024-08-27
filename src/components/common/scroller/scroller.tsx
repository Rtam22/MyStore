import { useRef, useState } from "react";
import Card from "../../home/card";
import ItemCard from "../itemCard";
import "./scroller.css";
import { scrollerProps } from "./scrollerTypes";

function Scroller({ items, title, size }: scrollerProps) {
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
    <div className="scroller-wrapper">
      <div className="hover">
        <h2>{title}</h2>
        <div className="button-right">
          <button onClick={handleLeftScroll} className="scroller-button-left">
            {"‹"}
          </button>
          <button onClick={handleRightScroll} className="scroller-button-right">
            {"›"}
          </button>
        </div>
      </div>

      <div
        className="scroller"
        id="scroller"
        ref={scrollerRef}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <div className="flex">
          {items.map((item, index) => {
            return <ItemCard key={index} item={item} size={size} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
