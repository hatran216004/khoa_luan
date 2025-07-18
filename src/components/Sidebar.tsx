import { Menu } from "lucide-react";
import Avatar from "../ui/Avatar";
import ItemChat from "../ui/ItemChat";
import SearchBox from "../ui/SearchBox";
import IconButton from "../ui/IconButton";
import { useState } from "react";
import MenuModal from "../ui/MenuModal";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const loop = [1, 2, 3, 4];

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className="w-80 flex flex-col gap-4 pl-4 pr-4 border-r relative bg-[var(--color-bg)]"
      style={{
        borderColor: "var(--color-border)",
      }}
    >
      <div className="flex items-center gap-3 py-4 relative">
        <IconButton onClick={handleMenu}>
          <Menu size={24} className="text-[var(--color-icon)]" />
        </IconButton>
        <SearchBox placeholder="Tìm kiếm" />
        {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
      </div>

      <div className="flex flex-col gap-2">
        {loop.map((el) => (
          <ItemChat key={el}>
            <Avatar src="/src/assets/10001.png" size="m" />
          </ItemChat>
        ))}
      </div>
    </div>
  );
}
