import { SearchIcon } from "lucide-react";

export default function SearchBox() {
  return (
    <div
      className="w-full flex items-center rounded-full px-4 py-2 border "
      style={{
        borderColor: "var(--color-border)",
      }}
    >
      <SearchIcon size={16} style={{ color: "var(--color-icon)" }} />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 w-full outline-none bg-transparent "
        style={{
          color: "var(--color-text)",
        }}
      />
    </div>
  );
}
