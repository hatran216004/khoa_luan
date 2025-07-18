import { SearchIcon } from "lucide-react";

type SearchBoxProps = {
  placeholder?: string;
};

export default function SearchBox({ placeholder }: SearchBoxProps) {
  return (
    <div
      className="w-full flex items-center rounded-full px-4 py-2 border focus-within:ring-2 focus-within:ring-[var(--color-ring)] transition"
      style={{
        borderColor: "var(--color-border-input)",
        backgroundColor: "var(--color-bg-input)",
      }}
    >
      <SearchIcon size={16} className="text-[var(--color-icon)]" />

      <input
        type="text"
        placeholder={placeholder}
        className="ml-2 w-full bg-transparent outline-none placeholder:text-[var(--color-subtext)] text-[var(--color-text)]"
      />
    </div>
  );
}
