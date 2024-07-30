import jewelryImage from "../assets/Jewelry.jpg";
import Electronics from "../assets/Electronics.jpg";
import { promoCardProps } from "../components/home/cardTypes";

export const promotionItems: promoCardProps[] = [
  {
    title: "Up to 15% off selected jewelry!",
    image: jewelryImage,
    imageAlt: "Collection of Jewelry",
    type: "promo-card",
    size: "small",
    color: "orange",
    banner: "Up to 15% off selected jewelry!",
  },
  {
    title: "Upgrade to the latest in tech with our cutting-edge electronics!",
    image: Electronics,
    imageAlt: "Collection of Jewelry",
    type: "promo-card",
    size: "large",
    color: "blue",
    banner: "Save 10% on Top Tech with Code TECH30",
  },
];
