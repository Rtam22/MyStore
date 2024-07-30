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

export type productItem = baseCard & {
  category?: never;
  price: number;
  description?: string;
  size: "small" | "large";
};

export type scrollerProps = {
  type: "product-card" | "category-card";
  items: (categoryItem | productItem)[];
};
