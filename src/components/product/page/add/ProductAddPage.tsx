import { useProductAddPageStore } from "./useProductAddPage";

export default function ProductAddPage() {
  const store = useProductAddPageStore();

  return (
    <div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="absolute flex w-full flex-row items-start justify-start">
        <div className="flex w-full flex-col gap-3 p-6">
          <div className="text-4xl font-bold text-[#303030]">{`Add New Product`}</div>
          <div></div>
          <div className="text-xl font-normal text-blue-500">{`Product Name`}</div>
          <input className="h-[60px] w-[731px] rounded-[10px] border border-blue-500 bg-white px-3" />
          <div></div>
          <div className="text-xl font-normal text-blue-500">{`Description`}</div>
          <textarea className="h-[60px] max-h-[300px] min-h-[60px] w-[731px] rounded-[10px] border border-blue-500 bg-white px-3 py-4" />
          <div></div>
          <div className="flex flex-row gap-6">
            <div className="flex w-[320px] flex-col gap-3">
              <div className="text-xl font-normal text-blue-500">{`SKU`}</div>
              <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
            </div>
            <div className="flex w-[320px] flex-col gap-3">
              <div className="text-xl font-normal text-blue-500">{`Stock`}</div>
              <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
