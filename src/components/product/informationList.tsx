import "./informationList.css";

type InformationListProps = {
  title: string;
  price: number;
  discount: number;
  salePrice: number;
  rating: number;
  description: string;
};

function InformationList({
  title,
  price,
  salePrice,
  discount,
  rating,
  description,
}: InformationListProps) {
  return (
    <div className="information-container">
      <h2>{title}</h2>
      <span>
        <div>
          {discount > 0 ? (
            <>
              <span className="discount-color">
                <p> ${salePrice}</p>{" "}
                <p className="discount-tag">(-{discount})%</p>
              </span>
              <div className="discounted-container">
                <s>${price}</s>
              </div>
            </>
          ) : (
            <>{price}</>
          )}
        </div>
        <p>
          {rating}
          <span className="star-icon">★</span>
        </p>
      </span>
      <p>{description}</p>
    </div>
  );
}

export default InformationList;
