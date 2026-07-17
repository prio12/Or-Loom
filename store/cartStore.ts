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

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) =>
          i.id === item.id && i.color === item.color && i.size === item.size,
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeItem: (id, color, size) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.id === id && i.color === color && i.size === size),
      ),
    })),

  updateQuantity: (id, color, size, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id && i.color === color && i.size === size
          ? { ...i, quantity }
          : i,
      ),
    })),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
