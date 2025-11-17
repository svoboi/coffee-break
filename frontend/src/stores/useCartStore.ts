import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Coffee } from "../types/types";

export interface CartItem {
  id: string; // Unique identifier for this cart item (coffee.id + timestamp/uuid)
  coffee: Coffee;
  quantity: number;
  addedAt: number; // Timestamp when added
}

export interface CartStoreType {
  items: CartItem[];
  addToCart: (coffee: Coffee, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartItems: () => CartItem[];
}

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (coffee: Coffee, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.coffee.id === coffee.id
          );

          if (existingItem) {
            // If coffee already in cart, increase quantity
            return {
              items: state.items.map((item) =>
                item.coffee.id === coffee.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          // Add new item to cart
          const newItem: CartItem = {
            id: `${coffee.id}-${Date.now()}`,
            coffee,
            quantity,
            addedAt: Date.now(),
          };

          return {
            items: [...state.items, newItem],
          };
        });
      },

      removeFromCart: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.coffee.price * item.quantity,
          0
        );
      },

      getCartItems: () => {
        return get().items;
      },
    }),
    {
      name: "coffee-cart-store", // localStorage key
      version: 1,
    }
  )
);
