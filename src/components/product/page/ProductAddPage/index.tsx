import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

import TextArea from "../../../common/TextArea";
import TextField from "../../../common/TextField";
import MiniTextField from "../../../common/TextField/mini";
import { Category } from "./src/category";
import { Image } from "./src/image";

function Headline(props: { children?: ReactNode }) {
  return (
    <div className="w-full text-4xl font-bold text-[#303030]">
      {props.children}
    </div>
  );
}

export default function ProductAddPage() {
  return (
    <div className="relative h-full w-full overflow-auto">
      <div
        className="absolute flex w-full flex-row items-stretch justify-start bg-[#E7F5FD]"
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <div className="flex w-full flex-col items-center gap-6 p-6">
          <Headline>{`Add New Product`}</Headline>
          <TextField label={`Product Name`} />
          <TextArea label={`Description`} />
          <div className="flex w-full flex-row gap-6">
            <MiniTextField label={`SKU`} />
            <MiniTextField label={`Stock`} />
          </div>
          <Category />
          <div className="flex w-full flex-col gap-3">
            <div className="text-xl font-normal text-blue-500">{`Price`}</div>
            <div className="flex w-full flex-row items-center gap-6">
              <input className="h-[60px] w-[237px] rounded-[10px] border border-blue-500 bg-white px-3" />
              <div className="flex flex-grow"></div>
              <Button
                className={`hidden bg-[#56E4A0] px-12 text-white shadow-none xl:flex`}
                style={{ textTransform: "none" }}
              >{`Publish`}</Button>
            </div>
          </div>
          <Image className="xl:hidden" />
          <Button
            className={`flex w-full flex-row items-center justify-center bg-[#56E4A0] px-12 text-white shadow-none xl:hidden`}
            style={{ textTransform: "none" }}
          >{`Publish`}</Button>
        </div>
        <div className="hidden w-64 flex-none flex-col items-center justify-start bg-[#F5FCFF] py-8 xl:flex">
          <Image className="max-h-48 max-w-[192px]" />
        </div>
      </div>
    </div>
  );
}
