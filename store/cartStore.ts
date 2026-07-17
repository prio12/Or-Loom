import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, color: string, size: string) => void;
  updateQuantity: (
    id: number,
    color: string,
    size: string,
    quantity: number,
  ) => void;
  totalPrice: () => number;
  totalItems: () => number;
}
