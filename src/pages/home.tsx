import React from "react";
import HeroSection from "../components/home/heroSection";
import clothingImage from "../assets/ClothingCollection.png";
import Card from "../components/home/card";
import "./home.css";
import Scroller from "../components/common/scroller/scroller";
import { promotionItems } from "../data/promotionItems";
import { v4 as uuidv4 } from "uuid";
import { products, productType } from "../data/products";
import { selectRandomNumbersArray } from "../utils/calculationUtils";
import Footer from "../components/navigation/footer";

export function fetchTopSellers(items: productType[], amount: number) {
  return items.sort((a, b) => b.amountSold - a.amountSold).slice(0, amount);
}
function Home() {
  function fetchStoreSales() {
    const saleItems = products.filter((item) => item.discount > 0);
    const itemIndex = selectRandomNumbersArray(saleItems.length, 10);
    let result = [];
    itemIndex.forEach((index) => {
      result = [...result, saleItems[index]];
    });
    return result;
  }

  return (
    <>
      <HeroSection
        key={uuidv4()}
        title="New Seasonal Arrivals"
        description="Discover our new seasonal styles"
        secondaryDescription="Refresh your wardrobe with the latest trends and must-have pieces"
        image={clothingImage}
        imageAlt="Collection of clothing"
        button="Shop Now!"
        href="/shop"
      />

      <div className="content home">
        <div className="container">
          <Scroller
            items={fetchStoreSales() as productType[]}
            title="Seasonal Sale"
            size="large"
          />
        </div>
        <div className="promotion-container">
          {promotionItems.map((item) => {
            return (
              <Card
                key={uuidv4()}
                title={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                type={item.type}
                size={item.size}
                color={item.color}
                banner={item.banner}
                href={item.href}
              />
            );
          })}
        </div>

        <div className="container">
          <Scroller
            items={fetchTopSellers(products, 9) as productType[]}
            title="Top Sellers"
            size="large"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
