export type TopSellingProductRow = {
  name: string;
  value: string;
};

export type TopSellingProductColumn = keyof TopSellingProductRow;

export type TopSellingProductHeader = {
  text: string;
  className: string;
};
