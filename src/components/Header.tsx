import { Info, Phone, Video } from "lucide-react";
import Avatar from "../ui/Avatar";
import IconButton from "../ui/IconButton";

export default function Header() {
  return (
    <div
      className="pl-4 pb-4 flex gap-4 justify-center items-center pr-4"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <Avatar src="src/assets/10001.png" size="m" />

      <div className="flex-1 flex flex-col overflow-hidden ">
        <p className="text-xl font-bold">Haibara Ai</p>
        <div className="flex items-center gap-2">
          <p className="text-sm" style={{ color: "var(--color-subtext)" }}>
            Online
          </p>
        </div>
      </div>
      <IconButton>
        <Video />
      </IconButton>
      <IconButton>
        <Phone />
      </IconButton>
      <IconButton>
        <Info />
      </IconButton>
    </div>
  );
}
