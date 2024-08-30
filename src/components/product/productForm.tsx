import { useState, useContext } from "react";
import "./productForm.css";
import { CartContext } from "../../context/cartContext";
import { productType } from "../../data/products";
import { v4 as uuidv4 } from "uuid";
type productFormProps = {
  product: productType;
  handleToast: (message: string, status: string) => void;
};

function ProductForm({ product, handleToast }: productFormProps) {
  const [selectedSize, setSizeSelectedSize] = useState<
    "XS" | "S" | "M" | "L" | "XL"
  >(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.color ? product.color[0] : null
  );
  const [selectedQuantity, setSelectQuantity] = useState<number>(1);
  const { addToCart } = useContext(CartContext);

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

  function handleSizes(
    sizes:
      | ("XS" | "S" | "M" | "L" | "XL")[]
      | ("6 Au" | "7 Au" | "8 Au" | "9 Au" | "10 Au")[]
  ) {
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
    let newProduct = { ...product };

    newProduct.id = uuidv4();
    if (selectedColor) {
      newProduct.selectedColor = selectedColor;
    }
    if (selectedSize) {
      newProduct.selectedSize = selectedSize;
    }
    newProduct.quantity = selectedQuantity;
    const result = addToCart(newProduct);
    if (result === "limit") {
      handleToast(`Quantity is limited to 20 max`, "error");
    }
    if (result === "success") {
      handleToast(`${product.title} has been added to your cart.`, "success");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {product.color ? handleColor(product.color) : null}
      {product.size ? handleSizes(product.size) : null}
      {handleQuantity()}
      <button className="submit-button" type="submit">
        Add to Cart
      </button>
    </form>
  );
}

export default ProductForm;
