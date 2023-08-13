import { MdOutlineImage } from "react-icons/md";

export function Image(props: { className?: string }) {
  const className = [
    "flex h-80 w-80 flex-col items-center justify-center rounded-lg bg-white p-6",
    props.className ?? "",
  ].join(" ");

  return (
    <button className={className}>
      <MdOutlineImage className="h-full w-full text-[#CAECFF]" />
      <div className="font-bold text-[#3B97CB] underline">{`Upload image here`}</div>
    </button>
  );
}
