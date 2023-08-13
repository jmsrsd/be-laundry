import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { MdOutlineImage } from "react-icons/md";

import { useProductAddPageStore } from "./hooks";

export default function ProductAddPage() {
  const store = useProductAddPageStore();

  const categories = [`Wash and Fold`, `Dry Clean`, `Home`, `Others`];
  const [category, setCategory] = useState("");

  return (
    <div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="absolute flex w-full flex-row items-start justify-start">
        <div className="flex w-full flex-col items-center gap-3 p-6">
          <div className="w-full text-4xl font-bold text-[#303030]">{`Add New Product`}</div>
          <div></div>
          <div className="w-full text-xl font-normal text-blue-500">{`Product Name`}</div>
          <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
          <div></div>
          <div className="w-full text-xl font-normal text-blue-500">{`Description`}</div>
          <textarea className="h-[60px] max-h-[300px] min-h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3 py-4" />
          <div></div>
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-[237px] flex-col gap-3">
              <div className="text-xl font-normal text-blue-500">{`SKU`}</div>
              <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
            </div>
            <div className="flex w-[237px] flex-col gap-3">
              <div className="text-xl font-normal text-blue-500">{`Stock`}</div>
              <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
            </div>
          </div>
          <div></div>
          <div className="w-full text-xl font-normal text-blue-500">{`Category`}</div>
          <div className="flex w-full flex-row flex-wrap items-center gap-3">
            {categories.map((item, index) => {
              const active = item === category;
              const className = active
                ? `bg-[#3B97CB] text-[#CAECFF] shadow-lg shadow-gray-900/20 focus:opacity-100 focus:shadow-lg active:opacity-100 active:shadow-lg`
                : `shadow-none bg-[#CAECFF] text-[#3B97CB]`;

              return (
                <Button
                  key={index}
                  className={`${className} p-3`}
                  style={{ textTransform: "none" }}
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </div>
          <div></div>
          <div className="flex w-full flex-col gap-3">
            <div className="text-xl font-normal text-blue-500">{`Price`}</div>
            <div className="flex w-full flex-row items-center gap-6">
              <input className="h-[60px] w-[237px] rounded-[10px] border border-blue-500 bg-white px-3" />
              <div className="flex flex-grow"></div>
              <Button
                className={`hidden bg-[#56E4A0] px-12 text-white shadow-none lg:flex`}
                style={{ textTransform: "none" }}
              >{`Publish`}</Button>
            </div>
          </div>
          <div></div>
          <div className="flex h-80 w-80 flex-col items-center justify-center rounded-lg bg-white p-6 lg:hidden">
            <MdOutlineImage className="h-full w-full" />
            <div className="font-bold underline">{`Upload image here`}</div>
          </div>
          <div></div>
          <Button
            className={`flex w-full flex-row items-center justify-center bg-[#56E4A0] px-12 text-white shadow-none lg:hidden`}
            style={{ textTransform: "none" }}
          >{`Publish`}</Button>
          <div></div>
        </div>
      </div>
    </div>
  );
}
