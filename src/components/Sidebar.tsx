import { Menu as MenuIcon } from 'lucide-react';
import SearchBox from '../ui/SearchBox';
import Popover from './Popover';
import Menu from './Menu';
import ConversationList from './ConversationList';

export default function Sidebar() {
  return (
    <aside
      className="w-80 flex flex-col gap-4 pl-4 pr-4 border-r relative bg-[var(--color-bg)]"
      style={{
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="flex items-center gap-3 py-4">
        <Popover renderPopover={<Menu />}>
          <MenuIcon size={24} className="text-[var(--color-icon)]" />
        </Popover>
        <SearchBox placeholder="Tìm kiếm" />
      </div>
      <ConversationList />
    </aside>
  );
}
