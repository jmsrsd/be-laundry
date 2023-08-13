export default function TextField(props: { label: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <div className="w-full text-xl font-normal text-blue-500">
        {props.label}
      </div>
      <input className="h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3" />
    </div>
  );
}
