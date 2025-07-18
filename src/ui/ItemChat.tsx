import { ReactNode } from "react";

type ItemChatProps = {
  children: ReactNode;
};

export default function ItemChat({ children }: ItemChatProps) {
  return (
    <div className="w-full flex gap-4 items-center px-4 py-2 hover:bg-[var(--color-bg-hover)] cursor-pointer">
      {children}
      <div className="flex-1 flex flex-col overflow-hidden">
        <p
          className="text-sm font-bold"
          style={{ color: "var(--color-primary-text)" }}
        >
          Haibara Ai
        </p>

        <div className="flex items-center gap-2">
          <p
            className="truncate flex-1 text-sm"
            style={{ color: "var(--color-subtext)" }}
          >
            The weather will be perfect for the...
          </p>
          <p
            className="text-xs whitespace-nowrap"
            style={{ color: "var(--color-time)" }}
          >
            9:41 AM
          </p>
        </div>
      </div>
    </div>
  );
}
