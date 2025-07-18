import { JSX, useEffect, useRef, useState } from "react";
import { Moon, LogOut } from "lucide-react";
import Avatar from "./Avatar";

type MenuModalProps = {
  onClose: () => void;
};

type MenuItemProps = {
  icon: JSX.Element;
  label: string;
};

export default function MenuModal({ onClose }: MenuModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute top-16 left-4 w-64 rounded-xl shadow-lg z-50 border text-sm transition-transform duration-200 scale-100 animate-fade-in"
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <div
        className="p-3 border-b font-semibold flex items-center gap-2"
        style={{
          borderColor: "var(--color-border)",
        }}
      >
        <Avatar src="src/assets/10001.png" size="s" />
        Haibara Ai
      </div>

      <ul className="p-2 space-y-1">
        <DarkModeToggle />
        <MenuItem icon={<LogOut size={18} />} label="Đăng xuất" />
      </ul>
    </div>
  );
}

function MenuItem({ icon, label }: MenuItemProps) {
  return (
    <li className="flex justify-between items-center hover:bg-[var(--color-bg-hover)] rounded px-3 py-2 cursor-pointer">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </li>
  );
}

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    const willEnable = !isDark;
    document.body.classList.toggle("dark", willEnable);
    setIsDark(willEnable);
  };

  return (
    <li className="flex justify-between items-center hover:bg-[var(--color-bg-hover)] rounded px-3 py-2 cursor-pointer">
      <div className="flex items-center gap-2">
        <Moon size={18} />
        <span>Chế độ tối</span>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
      </label>
    </li>
  );
}
