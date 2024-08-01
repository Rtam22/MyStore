import { Link } from "react-router-dom";
import "./subCategorySection.css";
import { subCategorySelectionProps } from "./filterTypes";

function SubCategorySection({ subCategory }: subCategorySelectionProps) {
  return (
    <div className="sub-category-container">
      {subCategory.map((category, index) => {
        return (
          <Link key={index} to={category.url}>
            {category.title}
          </Link>
        );
      })}
    </div>
  );
}

export default SubCategorySection;
