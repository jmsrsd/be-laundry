import { headers } from "./src/headers";
import { rows } from "./src/rows";

export function useTopSellingProduct() {
  return {
    headers,
    rows,
  };
}
