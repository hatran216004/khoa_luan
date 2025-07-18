import { Moon } from 'lucide-react';
import { useTheme } from '../store/theme';

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <li
      onClick={(e) => e.stopPropagation()}
      className="flex justify-between items-center hover:bg-[var(--color-bg-hover)] rounded px-3 py-2 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Moon size={18} />
        <span>Chế độ tối</span>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={setTheme}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
      </label>
    </li>
  );
}
