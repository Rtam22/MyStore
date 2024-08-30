import { useRef, useState } from "react";
import ItemCard from "../itemCard";
import "./scroller.css";
import { scrollerProps } from "./scrollerTypes";

function Scroller({ items, title, size }: scrollerProps) {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function handleScroll(direction: string) {
    let scrollLength = 380;
    if (window.innerWidth < 1000) {
      scrollLength = 282;
    }

    if (isScrolling) {
      return;
    }
    setIsScrolling(true);
    if (direction === "right")
      scrollerRef.current.scrollTo({
        left: scrollerRef.current.scrollLeft + scrollLength,
        behavior: "smooth",
      });
    else if (direction === "left") {
      scrollerRef.current.scrollTo({
        left: scrollerRef.current.scrollLeft - scrollLength,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 290);
  }

  return (
    <div className="scroller-wrapper">
      <div className="hover">
        <h2>{title}</h2>
        <div className="button-right">
          <button
            onClick={() => handleScroll("left")}
            className="scroller-button-left"
          >
            {"‹"}
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="scroller-button-right"
          >
            {"›"}
          </button>
        </div>
      </div>

      <div className="scroller" id="scroller" ref={scrollerRef}>
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
