import ProductStats from "../product/ProductStats";

export default function MainPage() {
  return (
    <div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="absolute flex w-full flex-col items-start justify-start gap-3 p-3">
        <div></div>
        <div className="flex h-80 w-full flex-row justify-center">
          <ProductStats />
        </div>
      </div>
    </div>
  );
}
