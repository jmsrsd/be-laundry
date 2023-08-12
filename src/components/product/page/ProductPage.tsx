import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

import Card from "../../common/Card";
import ProductSold from "../../product/sold/ProductSold";
import TopSellingProduct from "../../product/top-selling/TopSellingProduct";

const selectValues = ["This week", "This month", "This year"];

export default function ProductPage() {
  const [selectValue, _setSelectValue] = useState(selectValues[0]);

  const onSelectValue = (value?: string) => {
    _setSelectValue(`${value}`);
  };

  return (
    <div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="absolute flex w-full flex-col items-start justify-start gap-6 p-6">
        <Card className="flex h-[420px] w-full flex-col gap-3 pb-[72px]">
          <div className="b-3 flex w-full flex-none flex-row items-center gap-3 font-poppins">
            <div className="w-full truncate text-lg font-semibold">{`Product Sold`}</div>
            <div className="flex flex-shrink">
              <Select
                variant="outlined"
                className="border-[#CCE0EE]"
                value={selectValue}
                onChange={onSelectValue}
              >
                {selectValues.map((e, index) => {
                  return (
                    <Option key={index} value={e}>
                      {e}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
          <div className="flex h-[2px] w-full flex-none rounded-full bg-[#F2F7FB]" />
          <ProductSold className="flex flex-grow" />
        </Card>
        <Card className="flex h-72 w-full max-w-sm flex-col gap-3">
          <div className="b-3 flex w-full flex-none flex-row items-center gap-3 font-poppins">
            <div className="w-full truncate text-lg font-semibold">{`Top selling product`}</div>
            <div className="flex flex-shrink">
              <Select
                variant="outlined"
                className="border-[#CCE0EE]"
                value={selectValue}
                onChange={onSelectValue}
              >
                {selectValues.map((e, index) => {
                  return (
                    <Option key={index} value={e}>
                      {e}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
          <TopSellingProduct />
        </Card>
      </div>
    </div>
  );
}
