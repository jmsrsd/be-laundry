const TABLE_HEAD = ["Name", "Value"];

const TABLE_ROWS = [
  {
    name: "Item A",
    value: "$ 120.00",
  },
  {
    name: "Item B",
    value: "$ 80.00",
  },
  {
    name: "Item C",
    value: "$ 76.00",
  },
  {
    name: "Item D",
    value: "$ 98.00",
  },
  {
    name: "Item E",
    value: "$ 67.00",
  },
];

export default function TopSellingProduct() {
  const [headName, headValue] = TABLE_HEAD;

  return (
    <div className="relative h-full w-full overflow-y-auto font-poppins text-sm font-medium text-[#58595F]">
      <table className="absolute w-full table-auto">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th>
              <div className="p-4 text-left font-normal">{headName}</div>
            </th>
            <th>
              <div className="p-4 text-center font-normal">{headValue}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, value }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const className = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-50";

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
      <div className="sticky top-12 z-10 h-[1px] w-full bg-blue-gray-200"></div>
    </div>
  );
}
