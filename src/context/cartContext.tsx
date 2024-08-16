import { createContext, useState } from "react";
import { productType } from "../data/products";

type cardContextProp = {
  cartItems: productType[];
  showModal: boolean;
  addToCart: (product: productType) => void;
  removeFromCart: (itemId: string) => void;
  handleModal: () => void;
  updateCart: (newCart: productType[]) => void;
};

export const CartContext = createContext<cardContextProp | null>(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState<productType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  function addToCart(product: productType) {
    const newCart = checkDuplicate(product);
    if (newCart) {
      setCartItems(newCart);
    } else {
      setCartItems([product, ...cartItems]);
    }
    setShowModal(true);
  }

  function removeFromCart(itemId: string) {
    let newCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCart);
  }

  function checkDuplicate(product: productType) {
    let found = false;
    const newCart = cartItems.map((item) => {
      const result = compareItems(product, item);
      if (result) {
        found = true;
        item.quantity += product.quantity;
        return item;
      } else {
        return item;
      }
    });
    if (found) {
      return newCart;
    } else {
      return false;
    }
  }

  function compareItems(product: productType, item: productType) {
    switch (product.mainCategory) {
      case "mens-clothing":
      case "womans-clothing":
        if (
          product.selectedColor === item.selectedColor &&
          product.selectedSize === item.selectedSize
        ) {
          return true;
        } else return false;
    }
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
