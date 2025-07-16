type AvatarProps = {
  src: string;
  size?: "s" | "m" | "l";
};

export default function Avatar({ src, size = "m" }: AvatarProps) {
  const sizeClasses: Record<"s" | "m" | "l", string> = {
    s: "w-8 h-8",
    m: "w-12 h-12",
    l: "w-20 h-20",
  };
  return (
    <img
      src={src}
      alt="Avatar"
      className={`rounded-full object-cover ${sizeClasses[size]}`}
    />
  );
}
