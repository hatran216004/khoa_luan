import { Bell, BellOff, Pin, SearchIcon, X } from "lucide-react";
import { ReactNode } from "react";
import AccordionItem from "../ui/AccordionItem";
import IconButton from "../ui/IconButton";
import { useState } from "react";
import SearchBox from "../ui/SearchBox";

type SidebarInfoProps = {
  children: ReactNode;
};

export default function SidebarInfo({ children }: SidebarInfoProps) {
  const [isBell, setIsBell] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  function handleBell() {
    setIsBell((el) => !el);
  }

  function handleSearch() {
    setIsSearch((el) => !el);
  }

  if (isSearch) {
    return (
      <div className="w-112 flex flex-col p-4 border-l border-[var(--color-border)] bg-[var(--color-bg)]">
        <div
          className="flex gap-5  items-center mb-8"
          style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
        >
          <IconButton onClick={() => setIsSearch(false)}>
            <X />
          </IconButton>
          <span className="text-xl font-bold">Tìm kiếm</span>
        </div>
        <SearchBox placeholder="Tìm kiếm trong cuộc trò truyện" />
      </div>
    );
  }

  return (
    <div className="w-112 flex flex-col p-4 border-l border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="flex flex-col items-center">
        {children}
        <p className="mt-2 font-semibold text-[var(--color-primary-text)]">
          Haibara Ai
        </p>
      </div>

      <div className="flex justify-center gap-6 my-4">
        <IconButton onClick={handleBell}>
          {isBell ? <Bell size="20" /> : <BellOff size="20" />}

          <span>Tắt thông báo</span>
        </IconButton>
        <IconButton onClick={handleSearch}>
          <SearchIcon size="20" />
          <span>Tìm kiếm</span>
        </IconButton>
      </div>

      <div className="space-y-2">
        <AccordionItem title="Thông tin về đoạn chat">
          <IconButton direction="row">
            <Pin size="16" />
            <span>Xem tin nhắn đã ghim</span>
          </IconButton>
        </AccordionItem>

        <AccordionItem title="Tùy chỉnh đoạn chat">
          <IconButton direction="row">
            <Pin size="16" />
            <span>Xem tin nhắn đã ghim</span>
          </IconButton>
        </AccordionItem>

        <AccordionItem title="File phương tiện & file">
          <IconButton direction="row">
            <Pin size="16" />
            <span>Xem tin nhắn đã ghim</span>
          </IconButton>
        </AccordionItem>

        <AccordionItem title="Quyền riêng tư & hỗ trợ">
          <IconButton direction="row">
            <Pin size="16" />
            <span>Xem tin nhắn đã ghim</span>
          </IconButton>
        </AccordionItem>
      </div>
    </div>
  );
}
