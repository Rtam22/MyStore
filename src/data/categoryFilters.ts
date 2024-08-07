import { combineFilterTypes } from "../components/category/filterTypes";

export const maleClothingFilters: combineFilterTypes = {
  filterTypes: [
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
  ],

  subCategoryTypes: [
    {
      title: "Tshirts & Tops",
      url: "tshirts&tops",
    },
    {
      title: "Jackets & Hoodies",
      url: "jackets&hoodies",
    },
    {
      title: "Pants & Trousers",
      url: "pants&trousers",
    },
    {
      title: "Shoes",
      url: "shoes",
    },
  ],
};

export const femaleClothingFilters: combineFilterTypes = {
  filterTypes: [
    {
      title: "Price",
      filterType: "checkbox",
      filterValues: ["$0 to $20", "$20 to $50", "$50 to $100", "$100+"],
    },
    {
      title: "Size",
      filterType: "checkbox",
      filterValues: ["X-small", "Small", "Medium", "Large", "X-Large"],
    },
    {
      title: "Sales & Offers",
      filterType: "checkbox",
      filterValues: ["Sale"],
    },
  ],

  subCategoryTypes: [
    {
      title: "Tops & Blouses",
      url: "/tshirts&tops",
    },
    {
      title: "Jackets & Coats",
      url: "/jackets&coats&tops",
    },
    {
      title: "Dresses & Skirts",
      url: "/dresses&skirts",
    },
    {
      title: "Shoes",
      url: "/shoes",
    },
  ],
};

export const jewelryFilters: combineFilterTypes = {
  filterTypes: [
    {
      title: "Price",
      filterType: "checkbox",
      filterValues: ["$0 to $50", "$50 to $100", "$100 to $500", "$500+"],
    },
    {
      title: "Material",
      filterType: "checkbox",
      filterValues: ["Gold", "Silver", "Platinum", "Diamonds", "Pearls"],
    },
    {
      title: "Sales & Offers",
      filterType: "checkbox",
      filterValues: ["Sale"],
    },
  ],

  subCategoryTypes: [
    {
      title: "Necklaces & Pendants",
      url: "necklaces&pendants",
    },
    {
      title: "Earrings",
      url: "earrings",
    },
    {
      title: "Rings",
      url: "rings",
    },
    {
      title: "Watches",
      url: "watches",
    },
  ],
};

export const electronicsFilters: combineFilterTypes = {
  filterTypes: [
    {
      title: "Price",
      filterType: "checkbox",
      filterValues: ["$0 to $50", "$50 to $100", "$100 to $500", "$500+"],
    },
    {
      title: "Brand",
      filterType: "checkbox",
      filterValues: ["Brand A", "Brand B", "Brand C", "Brand D"],
    },
    {
      title: "Sales & Offers",
      filterType: "checkbox",
      filterValues: ["Sale", "test", "dhsajkda"],
    },
  ],

  subCategoryTypes: [
    {
      title: "Mobile Phones & Accessories",
      url: "mobilephones&accessories",
    },
    {
      title: "Laptops & Computers",
      url: "laptops&computers",
    },
    {
      title: "Tablets & E-Readers",
      url: "tablets&e-readers",
    },
  ],
};
