import { TopSellingProductColumn, TopSellingProductHeader } from "../../types";

export const headers: {
  [k in TopSellingProductColumn]: TopSellingProductHeader;
} = {
  name: {
    text: "Name",
    className: "text-left",
  },
  value: {
    text: "Value",
    className: "text-center",
  },
};
