import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import InputMessage from "../components/InputMessage";

export default function ChatPage() {
  return (
    <div
      className="flex pt-4  h-screen "
      style={{ background: "var(--color-bg)" }}
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex-1 overflow-y-auto">
          <MessageList />
        </div>

        <InputMessage />
      </div>
    </div>
  );
}
