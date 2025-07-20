import { Menu as MenuIcon } from "lucide-react";
import SearchBox from "../ui/SearchBox";
import Popover from "./Popover";
import Menu from "./Menu";
import ConversationList from "./ConversationList";

export default function Sidebar() {
  return (
    <aside className="h-full w-80 flex flex-col gap-4 pl-4 relative bg-[var(--color-bg)]">
      <div className="flex items-center gap-3 py-4">
        <Popover renderPopover={<Menu />}>
          <MenuIcon size={24} className="text-[var(--color-icon)]" />
        </Popover>
        <SearchBox placeholder="Tìm kiếm" />
      </div>
      <div className="h-full overflow-y-auto">
        <ConversationList />
      </div>
    </aside>
  );
}
