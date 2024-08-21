import { filterType, filterValue } from "../../hooks/useFilters";

type filterTypes = "radio" | "button" | "checkbox" | "dropdown";

export type filter = {
  title: string;
  filterType: filterTypes;
  filterValues: string[];
};

export type filterModalProps = {
  filters: filter[];
  subCategoryTitle: string;
  updateFilter: (value: filterValue, filterKey: keyof filterType) => void;
  filterSettings: filterType;
  handleHideFilter: () => void;
};

export type subCategoryType = {
  title: string;
  url: string;
  filters?: filter[];
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
  isSubCategory?: boolean;
  updateFilter: (value: filterValue, filterKey: keyof filterType) => void;
  handleHideLeftFilter: (value: boolean) => void;
  filterSettings: filterType;
};
