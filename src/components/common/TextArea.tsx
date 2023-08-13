export default function TextArea(props: { label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="w-full text-xl font-normal text-blue-500">
        {props.label}
      </div>
      <textarea className="h-[60px] max-h-[300px] min-h-[60px] w-full rounded-[10px] border border-blue-500 bg-white px-3 py-4" />
    </div>
  );
}
