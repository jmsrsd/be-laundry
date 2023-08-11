import { Bar } from "react-chartjs-2";

export type ProductStatsDatum = {
  key: string,
  value: number,
}

export default function ProductStats() {
  const data: ProductStatsDatum[] = [
    {
      key: '11/05',
      value: 3,
    },
    {
      key: '12/05',
      value: 4,
    },
    {
      key: '13/05',
      value: 2,
    },
    {
      key: '14/05',
      value: 5,
    },
    {
      key: '15/05',
      value: 8,
    },
    {
      key: '16/05',
      value: 8,
    },
    {
      key: '17/05',
      value: 7,
    },
    {
      key: '18/05',
      value: 9,
    },
  ]

  return (
    <Bar
      className="relative w-full"
      options={{
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            displayColors: false,
            mode: "point",
            bodyAlign: "center",
            yAlign: "bottom",
            backgroundColor: "transparent",
            bodyFont: {
              weight: "bold",
            },
            callbacks: {
              title: () => { return [] },
              labelTextColor: () => {
                return "#B2C5D4"
              },
              label: (ctx) => {
                const value = +ctx.formattedValue
                const unit = value > 1 ? 'items' : 'item'
                return `${value} ${unit}`
              }
            },
          },
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
            top: 24,
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
            offset: true,
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
