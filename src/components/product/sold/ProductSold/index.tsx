import { Button, Spinner } from "@material-tailwind/react";
import { Bar } from "react-chartjs-2";

import { useProductSoldConfig } from "./hooks/config";
import { useProductSoldQuery } from "./hooks/query";

export type ProductSoldChartType = "bar";

export type ProductSoldProps = {
  className?: string;
};

export default function ProductSold(props: ProductSoldProps) {
  const query = useProductSoldQuery();

  const className = [props.className ?? "", "relative w-full"].join(" ");

  const { options, data } = useProductSoldConfig({
    entries: query.data ?? [],
  });

  const isLoading = [
    query.isInitialLoading,
    query.isLoading,
    query.isFetching,
    query.isRefetching,
  ].reduce((a, b) => {
    return a || b;
  });

  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (query.error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <pre className="text-center font-sans">{`${query.error}`}</pre>
        <Button
          onClick={() => {
            query.refetch();
          }}
        >{`Reload`}</Button>
      </div>
    );
  }

  return (
    <Bar
      {...{
        className,
        options,
        data,
      }}
    />
  );
}
