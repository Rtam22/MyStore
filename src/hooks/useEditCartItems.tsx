import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { onChange } from "react-toastify/dist/core/store";

function UseEditCartItems() {
  const { cartItems, updateCart } = useContext(CartContext);

  function findItemValue(id: string, type: string) {
    const result = cartItems.find((item) => item.id === id);
    switch (type) {
      case "size":
        return result.selectedSize;
      case "color":
        return result.selectedColor;
    }
  }

  function updateOptionValue(
    id: string,
    type: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const newCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, [type]: event.currentTarget.value };
      }
      return item;
    });
    updateCart(newCart);
  }

  function handleColor(color: string | null, colors: string[], id: string) {
    if (color) {
      return (
        <div className="flex-start">
          <p>
            <span className="bold">Color:</span>
          </p>
          {colors.length > 1 ? (
            <select
              name="color"
              id="color"
              value={findItemValue(id, "color")}
              onChange={(event) =>
                updateOptionValue(id, "selectedColor", event)
              }
            >
              {colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          ) : (
            <p>{color}</p>
          )}
        </div>
      );
    }
    return null;
  }

  function handleSize(size: string | null, sizes: string[], id: string) {
    if (size) {
      return (
        <div className="flex-start">
          <p>
            <span className="bold">Size:</span>
          </p>
          <select
            name="size"
            id="size"
            value={findItemValue(id, "size")}
            onChange={(event) => updateOptionValue(id, "selectedSize", event)}
          >
            {sizes.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
    return null;
  }

  return { cartItems, handleSize, handleColor };
}

export default UseEditCartItems;
