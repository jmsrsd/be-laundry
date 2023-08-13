import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductAddPageStore = {
  productName: string;
  description: string;
  sku: string;
  stock: string;
  category: string;
  price: string;
  publish: () => void;
  clear: () => void;
};

export const useProductAddPageStore = create<ProductAddPageStore>()(
  persist(
    (set, get) => {
      const initial = {
        productName: "",
        description: "",
        sku: "",
        stock: "",
        category: "",
        price: "",
        publish: function () {
          get().clear();
        },
        clear: function () {
          set(initial, true);
        },
      };

      return initial;
    },
    {
      name: "/products",
    },
  ),
);
