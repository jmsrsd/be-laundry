import { ReactNode } from "react";

export default function Card(props: {
  className?: string;
  children?: ReactNode;
}) {
  const className = props.className ?? "";

  return (
    <div className={`${className} rounded-2xl bg-white p-3 shadow`}>
      {props.children}
    </div>
  );
}
