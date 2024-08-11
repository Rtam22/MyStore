import { useState } from "react";
import "./productForm.css";

type productFormProps = {
  title: string;
  colors?: string | string[];
  sizes?: ("XS" | "S" | "M" | "L" | "XL")[];
  handleToast: (message: string, status: string) => void;
};

function ProductForm({ title, sizes, colors, handleToast }: productFormProps) {
  const [selectedSize, setSizeSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedQuantity, setSelectQuantity] = useState<number>(1);

  function handleColor(colors: string | string[]) {
    if (Array.isArray(colors)) {
      return (
        <div className="color-container">
          <h4>Color</h4>
          <select
            value={selectedColor || ""}
            id="color"
            name="color"
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
  }

  function handleSizes(sizes: string[]) {
    return (
      <div className="size-container">
        <div className="size-title-container">
          <h4>Sizes</h4> <button>Size guide</button>
        </div>
        <div className="size-button-container">
          {sizes.map((size) => {
            return (
              <button
                key={size}
                className={`size-button ${
                  selectedSize === size ? "active" : ""
                }`}
                type="button"
                onClick={() => {
                  setSizeSelectedSize(size);
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function handleQuantity() {
    let options = [];
    for (let i = 1; i < 21; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <div className="quantity-container">
        <h4>Quantity</h4>
        <select
          value={selectedQuantity}
          name="quantity"
          id="quantity"
          onChange={(e) => setSelectQuantity(Number(e.target.value))}
        >
          {options}
        </select>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selectedSize === null) {
      handleToast("Please select a size.", "error");
      return;
    }
    console.log(selectedSize);
    console.log(selectedColor);
    console.log(selectedQuantity);
    handleToast(`${title} has been added to your cart.`, "success");
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {colors ? handleColor(colors) : null}
      {sizes ? handleSizes(sizes) : null}
      {handleQuantity()}
      <button className="submit-button" type="submit">
        Add to Cart
      </button>
    </form>
  );
}

export default ProductForm;
