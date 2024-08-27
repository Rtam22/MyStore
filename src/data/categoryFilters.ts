import { combineFilterTypes, filter } from "../components/category/filterTypes";

const commonFilterTypes: filter[] = [
  {
    title: "Price",
    filterType: "checkbox",
    filterValues: ["$0 to $20", "$20 to $50", "$50 to $100", "$100+"],
  },
  {
    title: "Size",
    filterType: "checkbox",
    filterValues: ["XS", "S", "M", "L", "XL"],
  },
  {
    title: "Sales & Offers",
    filterType: "checkbox",
    filterValues: ["Sale"],
  },
];

export const shopFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,
  subCategoryTypes: [
    {
      title: "Men's Clothing",
      url: "/mens-clothing",
    },
    {
      title: "Woman's Clothing",
      url: "/womans-clothing",
    },
    {
      title: "Jewelry",
      url: "/jewelry",
    },
  ],
};

export const maleClothingFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Tshirts & Tops",
      url: "/mens-clothing_tshirts-&-tops",
    },
    {
      title: "Jackets & Hoodies",
      url: "/mens-clothing_jackets-&-hoodies",
    },
    {
      title: "Pants & Trousers",
      url: "/mens-clothing_pants-&-trousers",
    },
    {
      title: "Shoes",
      url: "/mens-clothing_shoes",
      filters: [
        {
          title: "Price",
          filterType: "checkbox",
          filterValues: ["$0 to $20", "$20 to $50", "$50 to $100", "$100+"],
        },
        {
          title: "Size",
          filterType: "checkbox",
          filterValues: ["6 Au", "7 Au", "8 Au", "9 Au", "10 Au"],
        },
        {
          title: "Sales & Offers",
          filterType: "checkbox",
          filterValues: ["Sale"],
        },
      ],
    },
  ],
};

export const femaleClothingFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Tops & Blouses",
      url: "/womans-clothing_tops-&-blouses",
    },
    {
      title: "Jackets & Coats",
      url: "/womans-clothing_jackets-&-coats",
    },
    {
      title: "Pants & Skirts",
      url: "/womans-clothing_pants-&-skirts",
    },
    {
      title: "Shoes",
      url: "/womans-clothing_shoes",
    },
  ],
};

export const jewelryFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Necklaces & Pendants",
      url: "/jewelry_necklaces-&-pendants",
    },
    {
      title: "Earrings",
      url: "/jewelry_earrings",
    },
    {
      title: "Rings",
      url: "/jewelry_rings",
    },
    {
      title: "Watches",
      url: "/jewelry_watches",
    },
  ],
};

export const electronicsFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Mobile Phones",
      url: "/electronics/mobile-phones",
    },
    {
      title: "Laptops & Computers",
      url: "/electronics/laptops-&-computers",
    },
    {
      title: "Tablets",
      url: "/electronics/tablets",
    },
  ],
};
