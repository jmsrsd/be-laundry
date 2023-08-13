import {
  ProductSoldConfigDataProps,
  useProductSoldConfigData,
} from "./src/data";
import { useProductSoldConfigOptions } from "./src/options";

export type ProductSoldConfigProps = ProductSoldConfigDataProps;

export function useProductSoldConfig(props: ProductSoldConfigProps) {
  return {
    options: useProductSoldConfigOptions(),
    data: useProductSoldConfigData(props),
  };
}
