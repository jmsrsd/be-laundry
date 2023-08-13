import { ChartOptions } from "chart.js";

import { ProductSoldChartType } from "../../../../ProductSold";

export function useProductSoldConfigOptions(): ChartOptions<ProductSoldChartType> {
  return {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 32,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        mode: "point",
        bodyAlign: "center",
        yAlign: "bottom",
        backgroundColor: "white",
        bodyFont: {
          weight: "bold",
        },
        callbacks: {
          title: () => {
            return [];
          },
          labelTextColor: () => {
            return "#B2C5D4";
          },
          label: (ctx) => {
            const value = +ctx.formattedValue;
            const isPlural = value > 1;
            const unit = isPlural ? "items" : "item";

            return `${value} ${unit}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
            size: 12,
          },
          color: "#B2C5D4",
        },
      },
      y: {
        beginAtZero: true,
        offset: false,
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
}
