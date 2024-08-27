import { Link, useLocation } from "react-router-dom";
import { determineCategory } from "../../utils/textFormatUtils";
import "./breadCrumbNavigation.css";
import { formatTitle } from "../../utils/textFormatUtils";
function BreakCrumbNavigation() {
  const location = useLocation();
  const pathName = location.pathname;
  const paths = pathName.split("/");
  const categories = determineCategory(paths[1]);
  const product = paths[2];

  return (
    <div className="bread-crumb-container">
      {categories.mainCategory !== "shop" ? (
        <Link to="/shop">Shop</Link>
      ) : (
        <p>Shop</p>
      )}
      {categories.mainCategory &&
      categories.mainCategory !== "shop" &&
      categories.secondaryCategory ? (
        <>
          <span>›</span>
          <Link to={`/${categories.mainCategory}`}>
            {`${formatTitle(categories.mainCategory)}`}
          </Link>
        </>
      ) : categories.mainCategory && categories.mainCategory !== "shop" ? (
        <>
          <span>›</span>
          <p>{formatTitle(categories.mainCategory)}</p>
        </>
      ) : null}
      {categories.secondaryCategory && product ? (
        <>
          <span>›</span>
          <Link
            to={`/${categories.mainCategory}_${categories.secondaryCategory}`}
          >
            {`${formatTitle(categories.secondaryCategory)}`}
          </Link>
        </>
      ) : categories.secondaryCategory ? (
        <>
          <span>›</span>
          <p>{formatTitle(categories.secondaryCategory)}</p>
        </>
      ) : null}
      {product && (
        <>
          <span>›</span>
          <p>{formatTitle(product)}</p>
        </>
      )}
    </div>
  );
}

export default BreakCrumbNavigation;
