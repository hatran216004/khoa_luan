import { ReactNode } from "react";
import { Link } from "react-router-dom";

type IconButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  direction?: "row" | "col";
};

export default function IconButton({
  children,
  to,
  href,
  onClick,
  className = "",
  direction = "col",
}: IconButtonProps) {
  const base = `
    flex ${direction === "row" ? "flex-row" : "flex-col"}
    items-center justify-center gap-1
    text-[var(--color-icon)] hover:text-[var(--color-icon-hover)]
  `;

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
