import "./imageDisplay.css";

type imageDisplayProps = {
  image: string;
  imageAlt: string;
};

function ImageDisplay({ image, imageAlt }: imageDisplayProps) {
  return (
    <div className="image-display-container">
      <div className="image-option-conatiner"></div>
      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default ImageDisplay;
