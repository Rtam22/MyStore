import React from "react";
import HeroSection from "../components/home/heroSection";
import clothingImage from "../assets/ClothingCollection.png";
import { topSellersData } from "../data/topSellerItems";
import Card from "../components/home/card";
import "./home.css";
import Scroller from "../components/common/scroller/scroller";
import { categoryItems } from "../data/categoryItems";
import { promotionItems } from "../data/promotionItems";
import { v4 as uuidv4 } from "uuid";
function Home() {
  return (
    <>
      <HeroSection
        key={uuidv4()}
        title="Discover Our New Arrivals"
        description="Fresh styles for the season"
        secondaryDescription="Explore the latext trends and update your wardrobe"
        image={clothingImage}
        imageAlt="Collection of clothing"
        button="Shop Now!"
      />

      <div className="content home">
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
              />
            );
          })}
        </div>

        <div className="container">
          <h2>Category</h2>
          <Scroller type="category-card" items={categoryItems} />
        </div>

        <div className="container">
          <h2>Top Sellers</h2>
          <div className="category-items">
            <Scroller type="product-card" items={topSellersData}></Scroller>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
