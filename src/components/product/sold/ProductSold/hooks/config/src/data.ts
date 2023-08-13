import { ChartData } from "chart.js";

import { ProductSoldChartType } from "../../../../ProductSold";
import { ProductSoldQuery } from "../../query";

export type ProductSoldConfigDataProps = {
  entries: ProductSoldQuery;
};

export function useProductSoldConfigData(
  props: ProductSoldConfigDataProps,
): ChartData<ProductSoldChartType> {
  return {
    labels: props.entries.map((e) => e.date),
    datasets: [
      {
        data: props.entries.map((e) => e.amount),
        backgroundColor: "#B2C5D4",
        borderRadius: 4,
        borderSkipped: false,
        borderWidth: 0,
        hoverBackgroundColor: "#3E7DAB",
        hoverBorderWidth: 0,
      },
    ],
  };
}
