import { ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
};

export default function Card(props: CardProps) {
  const className = props.className ?? "";

  return (
    <div className={`${className} rounded-2xl bg-white p-3 shadow`}>
      {props.children}
    </div>
  );
}
