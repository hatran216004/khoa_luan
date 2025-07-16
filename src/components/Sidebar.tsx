// import { useTheme } from "../context/ThemeContext";

import { Menu } from "lucide-react";
import Avatar from "../ui/Avatar";
import ItemChat from "../ui/ItemChat";
import SearchBox from "../ui/SearchBox";
import IconButton from "../ui/IconButton";

export default function Sidebar() {
  const loop = [1, 2, 3, 4];

  return (
    <div
      className="w-80 flex flex-col gap-4 pl-4 pr-4 border-r"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <div className="flex justify-center items-center gap-2">
        <IconButton>
          <Menu size={24} />
        </IconButton>
        <SearchBox />
      </div>
      {loop.map((el) => (
        <ItemChat key={el}>
          <Avatar src="/src/assets/10001.png" size="m" />
        </ItemChat>
      ))}
    </div>
  );
}
