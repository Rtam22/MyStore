import { Link } from "react-router-dom";
import "./subCategorySection.css";
import { subCategorySelectionProps } from "./filterTypes";
import { formatTitle, removeSubCategory } from "../../utils/textFormatUtils";

function SubCategorySection({
  subCategory,
  currentCategory,
  setScrollPositionZero,
  clearFilters,
}: subCategorySelectionProps) {
  function handleClick() {
    setScrollPositionZero();
    clearFilters();
  }

  return (
    <div className="sub-category-container">
      {subCategory.map((category, index) => {
        return (
          <Link
            onClick={handleClick}
            className={
              formatTitle(currentCategory).toLowerCase() ===
              category.title.toLowerCase()
                ? "active-link"
                : ""
            }
            key={index}
            to={
              formatTitle(currentCategory).toLowerCase() ===
              category.title.toLowerCase()
                ? removeSubCategory(category.url)
                : category.url
            }
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
}

export default SubCategorySection;
