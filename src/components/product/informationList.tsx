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
              <div className="discounted-container">
                <s>${price}</s>
              </div>
              <span className="discount-color">
                <p> ${salePrice}</p>
              </span>
            </>
          ) : (
            <p>${price}</p>
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
