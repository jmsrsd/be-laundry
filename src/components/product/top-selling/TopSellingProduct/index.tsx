import { useTopSellingProduct } from "./hooks";

function TopSellingProductDivider() {
  return (
    <div className="sticky top-[52px] z-10 h-[1px] w-full bg-blue-gray-200" />
  );
}

export default function TopSellingProduct() {
  const { headers, rows } = useTopSellingProduct();

  return (
    <div className="relative h-full w-full overflow-y-auto font-poppins text-sm font-medium text-[#58595F]">
      <table className="absolute w-full table-auto">
        <thead className="sticky top-0 bg-white">
          <tr>
            {Object.values(headers).map((header, index) => {
              return (
                <th key={index}>
                  <div className={`${header.className} p-4 font-normal`}>
                    {header.text}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const { name, value } = row;
            const isLast = index === rows.length - 1;
            const className = [
              "p-4",
              isLast ? "" : "border-b border-blue-gray-50",
            ].join(" ");

            return (
              <tr key={name} className="hover:bg-[#F2F7FB]">
                <td className={`${className} text-left`}>
                  <div>{name}</div>
                </td>
                <td className={`${className} text-center`}>
                  <div>{value}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TopSellingProductDivider />
    </div>
  );
}
