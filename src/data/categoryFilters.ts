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
    filterValues: ["X-Small", "Small", "Medium", "Large", "X-Large"],
  },
  {
    title: "Sales & Offers",
    filterType: "checkbox",
    filterValues: ["Sale"],
  },
];

export const maleClothingFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Tshirts & Tops",
      url: "/mens-clothing/tshirts-&-tops",
    },
    {
      title: "Jackets & Hoodies",
      url: "/mens-clothing/jackets-&-hoodies",
    },
    {
      title: "Pants & Trousers",
      url: "/mens-clothing/pants-&-trousers",
    },
    {
      title: "Shoes",
      url: "/mens-clothing/shoes",
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
      url: "/womans-clothing/tops-&-blouses",
    },
    {
      title: "Jackets & Coats",
      url: "/womans-clothing/jackets-&-coats",
    },
    {
      title: "Pants & Skirts",
      url: "/womans-clothing/pants-&-skirts",
    },
    {
      title: "Shoes",
      url: "/womans-clothing/shoes",
    },
  ],
};

export const jewelryFilters: combineFilterTypes = {
  filterTypes: commonFilterTypes,

  subCategoryTypes: [
    {
      title: "Necklaces & Pendants",
      url: "/jewelry/necklaces-&-pendants",
    },
    {
      title: "Earrings",
      url: "/jewelry/earrings",
    },
    {
      title: "Rings",
      url: "/jewelry/rings",
    },
    {
      title: "Watches",
      url: "/jewelry/watches",
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
