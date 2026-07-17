import { create } from "zustand";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
  toggleItem: (item: WishlistItem) => void;
  isWishlisted: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  toggleItem: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === item.id);
      return exists
        ? { items: state.items.filter((i) => i.id !== item.id) }
        : { items: [...state.items, item] };
    }),
  isWishlisted: (id) => get().items.some((i) => i.id === id),
}));
