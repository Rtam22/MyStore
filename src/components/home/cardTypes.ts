export type baseCardProps = {
  title: string;
  image: string;
  imageAlt: string;
};

export type promoCardProps = baseCardProps & {
  type: "promo-card";
  size: "large" | "small";
  color: "orange" | "blue";
  banner: string;
  href?: never;
};

export type categoryCardProps = baseCardProps & {
  type: "category-card";
  href: string;
  banner?: never;
  size?: never;
  color?: never;
};

export type cardProps = promoCardProps | categoryCardProps;
