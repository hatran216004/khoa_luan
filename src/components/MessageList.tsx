import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

interface Message {
  id: number;
  username?: string;
  text: string;
  timestamp: string;
  isMine: boolean;
  isNotification?: boolean;
  reactions?: { [key: string]: number };
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    import("../data/messages.json").then((data) => {
      setMessages(data.default as Message[]);
    });
  }, []);

  return (
    <div
      className="flex-1 overflow-y-auto p-4"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      {messages.map((m) => (
        <MessageItem key={m.id} message={m} />
      ))}
    </div>
  );
}
