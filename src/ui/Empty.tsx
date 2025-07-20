import { MessageCircle } from "lucide-react";

type EmptyProps = {
  label: string;
};

export default function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full flex flex-col gap-2 justify-center items-center ">
      <MessageCircle
        size="160"
        strokeWidth={1.5}
        className="text-[var(--color-icon)]"
      />
      <span className="font-bold" style={{ color: "var(--color-text" }}>
        {label}
      </span>
    </div>
  );
}
