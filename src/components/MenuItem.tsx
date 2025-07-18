import clsx from 'clsx';

type MenuItemProps = {
  isLastItem?: boolean;
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

export default function MenuItem({
  isLastItem,
  className,
  icon,
  label,
  onClick
}: MenuItemProps) {
  return (
    <li className="flex justify-between items-center hover:bg-[var(--color-bg-hover)] rounded px-3 py-2 cursor-pointer">
      <button
        onClick={() => onClick?.()}
        className={clsx('flex items-center gap-2', className, {
          'border-b-0': isLastItem
        })}
      >
        {icon}
        <span>{label}</span>
      </button>
    </li>
  );
}
