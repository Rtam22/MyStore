import { productType } from "../data/products";

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
