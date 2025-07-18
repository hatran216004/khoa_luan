import { LogOut } from 'lucide-react';
import Avatar from '../ui/Avatar';
import MenuItem from './MenuItem';
import ToggleTheme from './ToggleTheme';

export default function Menu() {
  return (
    <div
      className="w-64 rounded-xl shadow-lg z-50 border text-sm transition-transform duration-200 scale-100 animate-fade-in"
      style={{
        background: 'var(--color-bg)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text)'
      }}
    >
      <div
        className="p-3 border-b font-semibold flex items-center gap-2"
        style={{
          borderColor: 'var(--color-border)'
        }}
      >
        <Avatar src="src/assets/10001.png" size="s" />
        Haibara Ai
      </div>

      <ul className="p-2 space-y-1">
        <ToggleTheme />
        <MenuItem icon={<LogOut size={18} />} label="Đăng xuất" />
      </ul>
    </div>
  );
}
