import jewelryImage from "../assets/Jewelry.png";
import ClothingSet from "../assets/ClothingSet.png";
import { promoCardProps } from "../components/home/cardTypes";

export const promotionItems: promoCardProps[] = [
  {
    title: "Use code JEWEL30 at checkout and Save!",
    image: jewelryImage,
    imageAlt: "Collection of Jewelry",
    type: "promo-card",
    size: "small",
    color: "orange",
    banner: "Save 10% off all Jewelry!",
    href: "/jewelry",
  },
  {
    title: "Explore our discounts and elevate your wardrobe with new trends",
    image: ClothingSet,
    imageAlt: "Collection of Jewelry",
    type: "promo-card",
    size: "large",
    color: "blue",
    banner: "Save up to 15% off selected products",
    href: "/shop",
  },
];
