import { Bar } from "react-chartjs-2";

import { useProductSoldQuery } from "./useProductSold";

export default function ProductStats(props: {
  className?: string,
}) {
  const className = props.className ?? ""

  const query = useProductSoldQuery();
  const data = query.data ?? [];

  return (
    <Bar
      className={`${className} relative w-full`}
      options={{
        maintainAspectRatio: false,
        plugins: {
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
                const unit = value > 1 ? "items" : "item";
                return `${value} ${unit}`;
              },
            },
          },
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            top: 32,
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
      }}
      data={{
        labels: data.map((e) => e.key),
        datasets: [
          {
            data: data.map((e) => e.value),
            hoverBackgroundColor: "#3E7DAB",
            backgroundColor: "#B2C5D4",
            hoverBorderWidth: 0,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
          },
        ],
      }}
    />
  );
}
