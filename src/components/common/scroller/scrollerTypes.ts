import { productType } from "../../../data/products";

type baseCard = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type categoryItem = baseCard & {
  category: string;
  price?: never;
  description?: never;
  size?: never;
};

export type scrollerProps = {
  items: productType[];
  title: string;
  size: "small" | "large";
};
