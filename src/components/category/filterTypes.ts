type filterType = "radio" | "button" | "checkbox" | "dropdown";

export type filter = {
  title: string;
  filterType: filterType;
  filterValues: string[];
};

export type filterModalProps = {
  filters: filter[];
};

export type subCategoryType = {
  title: string;
  url: string;
};

export type subCategorySelectionProps = {
  subCategory: subCategoryType[];
};

export type combineFilterTypes = {
  filterTypes: filter[];
  subCategoryTypes: subCategoryType[];
};

export type allFilterProps = {
  allfilters: combineFilterTypes;
  categoryTitle: string;
};
