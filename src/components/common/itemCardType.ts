export type itemCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  rating?: number;
  href: string;
  price: number;
  size: "large" | "small";
};
