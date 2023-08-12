import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Value"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    value: "Manager",
  },
  {
    name: "Alexa Liras",
    value: "Developer",
  },
  {
    name: "Laurent Perrier",
    value: "Executive",
  },
  {
    name: "Michael Levi",
    value: "Developer",
  },
  {
    name: "Richard Gran",
    value: "Manager",
  }
];

export default function TopSellingProduct() {
  const [headName, headValue] = TABLE_HEAD

  return <div className="relative overflow-y-auto w-full h-full">
    <table className="absolute w-full table-auto">
      <thead className="bg-white sticky top-0">
        <tr>
          <th>
            <Typography
              variant="small"
              color="blue-gray"
              className="text-left font-normal p-4 leading-none opacity-70"
            >
              {headName}
            </Typography>
          </th>
          <th>
            <Typography
              variant="small"
              color="blue-gray"
              className="text-center font-normal p-4 leading-none opacity-70"
            >
              {headValue}
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(({ name, value }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={name} className="hover:bg-[#F2F7FB]">
              <td className={`${classes} text-left`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className={`${classes} text-center`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {value}
                </Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="sticky h-[1px] w-full bg-blue-gray-200 z-10 top-12"></div>
  </div>
}
