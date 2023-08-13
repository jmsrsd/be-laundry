import { create } from "zustand";

export type CategoryStore = {
  categories: string[];
  category: string;
  setCategory: (value: string) => void;
  clear: () => void;
};

export const useCategoryStore = create<CategoryStore>()((set) => {
  const initial = {
    categories: [`Wash and Fold`, `Dry Clean`, `Home`, `Others`],
    category: "",
    setCategory: function (value: string) {
      set({ category: value });
    },
    clear: function () {
      set(initial, true);
    },
  };

  return initial;
});
