import "./informationList.css";

type InformationListProps = {
  title: string;
  price: number;
  rating: number;
  description: string;
};

function InformationList({
  title,
  price,
  rating,
  description,
}: InformationListProps) {
  return (
    <div className="information-container">
      <h2>{title}</h2>
      <span>
        <p>${price}</p>
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
