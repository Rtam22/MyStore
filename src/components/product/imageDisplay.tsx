import "./imageDisplay.css";

type imageDisplayProps = {
  image: string;
  imageAlt: string;
  discount: number;
};

function ImageDisplay({ image, imageAlt, discount }: imageDisplayProps) {
  return (
    <div className="image-display-container">
      {discount > 0 ? (
        <div className="discount-tag-item">{discount}% Off</div>
      ) : null}
      <div className="image-option-conatiner"></div>
      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default ImageDisplay;
