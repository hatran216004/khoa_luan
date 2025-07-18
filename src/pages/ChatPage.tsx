import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import InputMessage from "../components/InputMessage";
import SidebarInfo from "../components/SidebarInfo";
import Avatar from "../ui/Avatar";
import { useState } from "react";

export default function ChatPage() {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const handleSidebarInfo = () => {
    setIsOpenInfo((el) => !el);
  };

  return (
    <div
      className="flex pt-4  h-screen "
      style={{ background: "var(--color-bg)" }}
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header onToggleSidebarInfo={handleSidebarInfo} />

        <div className="flex-1 overflow-y-auto">
          <MessageList />
        </div>

        <InputMessage />
      </div>
      {isOpenInfo && (
        <SidebarInfo>
          <Avatar src="src\assets\10001.png" size="l" />
        </SidebarInfo>
      )}
    </div>
  );
}
