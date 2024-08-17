import { createContext, useState } from "react";
import { productType } from "../data/products";

type cardContextProp = {
  cartItems: productType[];
  showModal: boolean;
  addToCart: (product: productType) => string;
  removeFromCart: (itemId: string) => void;
  handleModal: () => void;
  updateCart: (newCart: productType[]) => void;
};

export const CartContext = createContext<cardContextProp | null>(null);
const quantityLimiter = 20;
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState<productType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  function addToCart(product: productType) {
    const newCart = checkDuplicate(product);
    if (newCart === "limit") {
      return "limit";
    }
    if (newCart) {
      setCartItems(newCart);
      setShowModal(true);
      return "success";
    } else {
      setCartItems([product, ...cartItems]);
      setShowModal(true);
      return "success";
    }
  }

  function removeFromCart(itemId: string) {
    let newCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCart);
  }

  function checkDuplicate(product: productType) {
    let found = false;
    let limit = false;
    const newCart = cartItems.map((item) => {
      const result = compareItems(product, item);
      if (result) {
        if (item.quantity + product.quantity > quantityLimiter) {
          limit = true;
          return item;
        } else {
          found = true;
          item.quantity += product.quantity;
          return item;
        }
      } else {
        return item;
      }
    });
    if (limit) {
      return "limit";
    }
    if (found) {
      return newCart;
    } else {
      return false;
    }
  }

  function compareItems(product: productType, item: productType) {
    return (
      product.mainCategory === item.mainCategory &&
      product.title === item.title &&
      product.selectedColor === item.selectedColor &&
      product.selectedSize === item.selectedSize
    );
  }

  function updateCart(newCart: productType[]) {
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        showModal,
        addToCart,
        removeFromCart,
        handleModal,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
