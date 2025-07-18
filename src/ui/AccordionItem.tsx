import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

export default function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-2 font-semibold text-[var(--color-primary-text)] hover:opacity-80"
      >
        {title}
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>

      {isOpen && <div className="pl-4 space-y-1">{children}</div>}
    </div>
  );
}
