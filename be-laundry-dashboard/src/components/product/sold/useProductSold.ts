import { useQuery } from "@tanstack/react-query";

export type ProductSoldQuery = {
  key: string;
  value: number;
}[];

export function useProductSoldQuery() {
  return useQuery({
    queryKey: ["/product/stats"],
    queryFn: () => {
      const result: ProductSoldQuery = [
        {
          key: "11/05",
          value: 3,
        },
        {
          key: "12/05",
          value: 4,
        },
        {
          key: "13/05",
          value: 2,
        },
        {
          key: "14/05",
          value: 5,
        },
        {
          key: "15/05",
          value: 8,
        },
        {
          key: "16/05",
          value: 8,
        },
        {
          key: "17/05",
          value: 7,
        },
        {
          key: "18/05",
          value: 9,
        },
      ];

      return result;
    },
  });
}
