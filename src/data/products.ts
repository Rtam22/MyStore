import { itemCardProps } from "../components/common/itemCardType";
import jewelryImage from "../assets/Jewelry.jpg";
import Tshirt1 from "../assets/products/mens-clothing/Tshirt1.png";
import Tshirt2 from "../assets/products/mens-clothing/Tshirt2.png";
import Tshirt3 from "../assets/products/mens-clothing/Tshirt3.png";
import Tshirt4 from "../assets/products/mens-clothing/Tshirt4.png";
import Tshirt5 from "../assets/products/mens-clothing/Tshirt5.png";
import Tshirt6 from "../assets/products/mens-clothing/Tshirt6.png";
import Tshirt7 from "../assets/products/mens-clothing/Tshirt7.png";
import Tshirt8 from "../assets/products/mens-clothing/Tshirt8.png";
import WTshirt1 from "../assets/products/womans-clothing/WTshirt1.png";
import WTshirt2 from "../assets/products/womans-clothing/WTshirt2.png";
import WTshirt3 from "../assets/products/womans-clothing/WTshirt3.png";
import WTshirt4 from "../assets/products/womans-clothing/WTshirt4.png";

import Pants1 from "../assets/products/mens-clothing/Pants1.png";
import Pants2 from "../assets/products/mens-clothing/Pants2.png";
import Pants3 from "../assets/products/mens-clothing/Pants3.png";
import WPants1 from "../assets/products/womans-clothing/WPants1.png";
import WSkirt1 from "../assets/products/womans-clothing/WSkirt1.png";
import WSkirt2 from "../assets/products/womans-clothing/WSkirt2.png";

export type productType = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  rating: number;
  price: number;
  mainCategory: string;
  subCategory: string;
  availability: boolean;
  href: string;
  size?: string[];
  color?: string[];
  discount?: number;
  salePrice?: number;
  tag?: string[];
  amountSold: number;
};

export const products: productType[] = [
  /* Tshirts and tops  */
  {
    id: "black-tshirt",
    href: "Classic-Black-T-shirt",
    title: "Classic Black T-shirt",
    description:
      "A classic black T-shirt that’s a wardrobe staple. Crafted from soft, breathable cotton, it offers a timeless look and versatile style that pairs well with any outfit.",
    image: Tshirt5,
    imageAlt: "A classic black T-shirt with a sleek design",
    rating: 4.5,
    price: 19.99,
    mainCategory: "mens clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Black"],
    discount: 0,
    salePrice: 17.99,
    tag: ["casual", "basic"],
    amountSold: 223,
  },
  {
    id: "pacman-yellow-tshirt",
    title: "Pacman Yellow T-shirt",
    href: "Pacman-Yellow-T-shirt",
    description:
      "Brighten up your day with this Pacman Yellow T-shirt. Featuring a vivid yellow color and playful design, it's perfect for those who love a touch of fun and a splash of color in their wardrobe.",
    image: Tshirt6,
    imageAlt: "A vibrant Pacman yellow T-shirt with a playful design",
    rating: 4.7,
    price: 21.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Yellow"],
    discount: 5,
    salePrice: 20.99,
    tag: ["fun", "bright"],
    amountSold: 128,
  },
  {
    id: "white-red-stripe-tshirt",
    title: "White with Red Stripe T-shirt",
    href: "White-with-Red-Stripe-T-shirt",
    description:
      "This T-shirt combines classic white with bold red stripes for a sporty and stylish look. Made from premium cotton, it’s both comfortable and eye-catching, ideal for a casual day out.",
    image: Tshirt7,
    imageAlt: "A white T-shirt with bold red stripes for a sporty look",
    rating: 4.6,
    price: 22.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["White", "Red"],
    discount: 15,
    salePrice: 19.99,
    tag: ["sporty", "striped"],
    amountSold: 123,
  },
  {
    id: "lavender-purple-tshirt",
    title: "Lavender Purple T-shirt",
    href: "Lavender-Purple-T-shirt",
    description:
      "Add a pop of color with this Lavender Purple T-shirt. Its soft, pastel hue brings a refreshing and modern touch, while the relaxed fit ensures all-day comfort.",
    image: Tshirt8,
    imageAlt: "A pastel lavender purple T-shirt with a soft hue",
    rating: 4.8,
    price: 20.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Lavender"],
    discount: 0,
    salePrice: 20.99,
    tag: ["pastel", "comfortable"],
    amountSold: 420,
  },
  {
    id: "essential-white-tshirt",
    title: "Essential White T-shirt",
    href: "Essential-White-T-shirt",
    description:
      "The quintessential white T-shirt, designed for simplicity and elegance. Made from high-quality cotton, it’s a versatile piece that complements any outfit and is a must-have in every wardrobe.",
    image: Tshirt1,
    imageAlt: "A classic white T-shirt for a simple and elegant look",
    rating: 4.5,
    price: 18.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["White"],
    discount: 0,
    salePrice: 18.99,
    tag: ["elegant", "basic"],
    amountSold: 49,
  },
  {
    id: "black-oversized-tshirt",
    title: "Black Oversized T-shirt",
    href: "Black-Oversized-T-shirt",
    description:
      "Embrace a laid-back style with this Black Oversized T-shirt. Its relaxed fit and ultra-soft fabric provide a comfortable, casual look that's perfect for lounging or layering.",
    image: Tshirt2,
    imageAlt: "A relaxed black oversized T-shirt for a casual look",
    rating: 4.7,
    price: 24.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["M", "L", "XL", "XXL"],
    color: ["Black"],
    discount: 0,
    salePrice: 24.99,
    tag: ["oversized", "casual"],
    amountSold: 139,
  },
  {
    id: "black-countries-text-tshirt",
    title: "Black T-shirt with Countries Text",
    href: "Black-T-shirt-with-Countries-Text",
    description:
      "Show off your global spirit with this Black T-shirt featuring a unique design with country names. Made from soft cotton, this shirt combines style and international flair.",
    image: Tshirt3,
    imageAlt: "A black T-shirt with a unique design featuring country names",
    rating: 4.6,
    price: 22.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Black"],
    discount: 0,
    salePrice: 22.99,
    tag: ["global", "text"],
    amountSold: 98,
  },
  {
    id: "white-small-text-tshirt",
    title: "White T-shirt with Small Text",
    href: "White-T-shirt-with-Small-Text",
    description:
      "This minimalist White T-shirt features a subtle text detail, adding a touch of sophistication to a classic look. Made from soft, breathable cotton, it's perfect for effortless style.",
    image: Tshirt4,
    imageAlt: "A minimalist white T-shirt with subtle text detail",
    rating: 4.8,
    price: 19.99,
    mainCategory: "mens-clothing",
    subCategory: "tshirts-&-tops",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["White"],
    discount: 0,
    salePrice: 19.99,
    tag: ["minimalist", "subtle"],
    amountSold: 184,
  },

  {
    id: "black-text-tshirt",
    title: "Bold Black Graphic Tee",
    href: "Bold-Black-Graphic-Tee",
    description:
      "A sleek black T-shirt featuring a bold text graphic. Crafted from high-quality cotton, it combines comfort with a statement-making design, perfect for any casual outing.",
    image: WTshirt1,
    imageAlt: "A sleek black T-shirt with bold text",
    rating: 4.6,
    price: 22.99,
    mainCategory: "womans-clothing",
    subCategory: "tops-&-blouses",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Black"],
    discount: 10,
    salePrice: 20.69,
    tag: ["modern", "statement"],
    amountSold: 465,
  },
  {
    id: "white-black-stripes-tshirt",
    title: "Chic White & Black Striped Tee",
    href: "Chic-White-&-Black-Striped-Tee",
    description:
      "Elevate your casual look with this chic white and black striped T-shirt. Made from soft, breathable cotton, it offers a stylish contrast that’s both trendy and versatile.",
    image: WTshirt2,
    imageAlt: "A T-shirt with white and black stripes",
    rating: 4.4,
    price: 24.99,
    mainCategory: "womans-clothing",
    subCategory: "tops-&-blouses",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["White", "Black"],
    discount: 0,
    salePrice: 24.99,
    tag: ["chic", "casual"],
    amountSold: 130,
  },
  {
    id: "gray-white-tshirt",
    title: "Minimalist Gray & White Tee",
    href: "Minimalist-Gray-&-white-Tee",
    description:
      "Keep it simple and stylish with this minimalist gray and white T-shirt. Designed for ultimate comfort and crafted from soft cotton, it’s a staple piece for any wardrobe.",
    image: WTshirt3,
    imageAlt: "A gray and white T-shirt with minimalistic design",
    rating: 4.5,
    price: 19.99,
    mainCategory: "womans-clothing",
    subCategory: "tops-&-blouses",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "White"],
    discount: 15,
    salePrice: 16.99,
    tag: ["comfortable", "simple"],
    amountSold: 294,
  },
  {
    id: "classic-white-tshirt",
    title: "Timeless Classic White Tee",
    href: "Timeless-Classic-White-Tee",
    description:
      "Embrace elegance with this timeless classic white T-shirt. Made from premium, soft cotton, it offers a clean, versatile look that pairs effortlessly with any outfit. Perfect for layering or wearing solo.",
    image: WTshirt4,
    imageAlt: "A classic white T-shirt with a clean, versatile design",
    rating: 4.8,
    price: 18.99,
    mainCategory: "womans-clothing",
    subCategory: "tops-&-blouses",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["White"],
    discount: 0,
    salePrice: 18.99,
    tag: ["classic", "versatile"],
    amountSold: 123,
  },

  /* Pants */

  {
    id: "naval-blue-jeans",
    href: "Naval-Blue-Jeans",
    title: "Naval Blue Ankle Length Jeans",
    description:
      "Stylish and comfortable, these ankle-length jeans in naval blue are a perfect addition to your wardrobe. Crafted from durable denim, they offer a sleek look that pairs well with both casual and formal outfits.",
    image: Pants1,
    imageAlt: "Naval blue ankle-length jeans with a sleek design",
    rating: 4.6,
    price: 39.99,
    mainCategory: "mens-clothing",
    subCategory: "pants-&-trousers",
    availability: true,
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Naval Blue"],
    discount: 10,
    salePrice: 35.99,
    tag: ["denim", "casual"],
    amountSold: 320,
  },
  {
    id: "black-pants",
    href: "Black-Pants",
    title: "Classic Black Pants",
    description:
      "These classic black pants offer a versatile and timeless look. Made from a comfortable stretch fabric, they are perfect for both work and leisure.",
    image: Pants2,
    imageAlt: "Classic black pants with a comfortable fit",
    rating: 4.4,
    price: 29.99,
    mainCategory: "mens-clothing",
    subCategory: "pants-&-trousers",
    availability: true,
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black"],
    discount: 0,
    salePrice: 29.99,
    tag: ["formal", "versatile"],
    amountSold: 180,
  },
  {
    id: "wide-ankle-blue-pants",
    href: "Wide-Ankle-Blue-Pants",
    title: "Wide Ankle Blue Pants",
    description:
      "Make a bold statement with these wide ankle blue pants. Designed with a relaxed fit, they bring comfort and style together, making them perfect for a casual day out.",
    image: Pants3,
    imageAlt: "Wide ankle blue pants with a relaxed fit",
    rating: 4.7,
    price: 34.99,
    mainCategory: "mens-clothing",
    subCategory: "pants-&-trousers",
    availability: true,
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue"],
    discount: 5,
    salePrice: 32.99,
    tag: ["relaxed fit", "casual"],
    amountSold: 67,
  },

  {
    id: "light-blue-jeans",
    href: "Light-Blue-Jeans",
    title: "Light Blue Skinny Jeans",
    description:
      "These light blue skinny jeans are a wardrobe essential, offering a flattering fit with just the right amount of stretch. Perfect for casual outings or pairing with your favorite top.",
    image: WPants1,
    imageAlt: "Light blue skinny jeans with a flattering fit",
    rating: 4.8,
    price: 34.99,
    mainCategory: "womans-clothing",
    subCategory: "pants-&-skirts",
    availability: true,
    size: ["XS", "S", "M", "L", "XL"],
    color: ["Light Blue"],
    discount: 15,
    salePrice: 29.74,
    tag: ["skinny fit", "casual"],
    amountSold: 285,
  },
  {
    id: "blue-long-skirt",
    href: "Blue-Long-Skirt",
    title: "Blue Long Skirt",
    description:
      "Elegant and flowing, this blue long skirt adds a touch of grace to your ensemble. Made from soft, breathable fabric, it’s perfect for both casual and formal occasions.",
    image: WSkirt1,
    imageAlt: "Elegant blue long skirt with a flowing design",
    rating: 4.7,
    price: 39.99,
    mainCategory: "womans-clothing",
    subCategory: "pants-&-skirts",
    availability: true,
    size: ["S", "M", "L", "XL"],
    color: ["Blue"],
    discount: 10,
    salePrice: 35.99,
    tag: ["elegant", "flowing"],
    amountSold: 324,
  },
  {
    id: "leather-skirt-zip",
    href: "Leather-Skirt-Zip",
    title: "Zippered Leather Skirt",
    description:
      "Bold and chic, this zippered leather skirt is designed to make a statement. With a sleek silhouette and edgy zipper detail, it’s perfect for a night out or adding some attitude to your outfit.",
    image: WSkirt2,
    imageAlt: "Zippered leather skirt with an edgy design",
    rating: 4.9,
    price: 49.99,
    mainCategory: "womans-clothing",
    subCategory: "pants-&-skirts",
    availability: true,
    size: ["S", "M", "L"],
    color: ["Black"],
    discount: 5,
    salePrice: 47.49,
    tag: ["edgy", "night out"],
    amountSold: 120,
  },
];
