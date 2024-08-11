import "./imageDisplay.css";

type imageDisplayProps = {
  image: string;
  imageAlt: string;
};

function ImageDisplay({ image, imageAlt }: imageDisplayProps) {
  return (
    <div className="image-display-container">
      <div className="image-option-conatiner">
        <div className="image-container small"></div>
        <div className="image-container small"></div>
        <div className="image-container small"></div>
      </div>
      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default ImageDisplay;
