import { useQuery } from "@tanstack/react-query";

import { delay } from "../../../../../utils";

export type ProductSoldQuery = {
  date: string;
  amount: number;
}[];

export const PRODUCT_SOLD_QUERY_KEY = ["/product/sold"];

export function useProductSoldQuery() {
  return useQuery({
    retry: 0,
    queryKey: PRODUCT_SOLD_QUERY_KEY,
    queryFn: async () => {
      await delay(1000);

      const error = Math.random();

      if (error >= 2.0 / 3.0) {
        throw new Error(
          [
            "This is an artificial error condition",
            "(33% chance would occur again)",
          ].join("\n"),
        );
      }

      const result: ProductSoldQuery = [
        {
          date: "11/05",
          amount: 3,
        },
        {
          date: "12/05",
          amount: 4,
        },
        {
          date: "13/05",
          amount: 2,
        },
        {
          date: "14/05",
          amount: 5,
        },
        {
          date: "15/05",
          amount: 8,
        },
        {
          date: "16/05",
          amount: 8,
        },
        {
          date: "17/05",
          amount: 7,
        },
        {
          date: "18/05",
          amount: 9,
        },
      ];

      return result;
    },
  });
}
