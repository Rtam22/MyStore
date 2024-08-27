import { products, productType } from "../data/products";

export function calculateTotalCost(items: productType[]) {
  let total = 0;
  items.forEach((item) => {
    if (item.quantity === 1) {
      total += item.salePrice;
    } else {
      total += item.quantity * item.salePrice;
    }
  });
  return parseFloat(total.toFixed(2));
}

export function calculateQuantityTotal(items: productType[]) {
  let total = 0;
  items.forEach((item) => {
    if (typeof item.quantity !== "number") {
      total += Number(item.quantity);
    } else {
      total += item.quantity;
    }
  });
  return total;
}

export function calculateItemTotal(price: number, quantity: number) {
  return parseFloat((price * quantity).toFixed(2));
}

export function selectRandomNumbersArray(maxLength: number, maxAmount: number) {
  let selectionArray = [];
  for (let i = 0; i < maxAmount; i++) {
    let randomNumber = Math.floor(Math.random() * maxLength);
    let found = selectionArray.find((number) => number === randomNumber);

    while (found) {
      randomNumber = Math.floor(Math.random() * maxLength);
      found = selectionArray.find((number) => number === randomNumber);
    }
    selectionArray = [...selectionArray, randomNumber];
  }
  return selectionArray;
}
