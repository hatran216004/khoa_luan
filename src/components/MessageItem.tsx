import { Message } from "../types/message";

export default function MessageItem({ message }: { message: Message }) {
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (message.isNotification) {
    return (
      <div
        className="text-center text-sm py-2"
        style={{ color: "var(--color-notify-text)" }}
      >
        {message.text}
      </div>
    );
  }

  return (
    <div
      className={`flex ${
        message.isMine ? "justify-end" : "justify-start"
      } mb-2 px-4`}
    >
      {!message.isMine && message.username && (
        <div className="mr-2 flex flex-col items-start">
          <span
            className="text-xs mb-1"
            style={{ color: "var(--color-username)" }}
          >
            {message.username}
          </span>
        </div>
      )}

      <div
        className="relative px-4 py-2 rounded-2xl max-w-[60%] break-words"
        style={{
          background: message.isMine
            ? "var(--color-bg-my)"
            : "var(--color-bg-other)",
          color: message.isMine
            ? "var(--color-text-my)"
            : "var(--color-text-other)",
        }}
      >
        <p>{message.text}</p>
        <div
          className="text-[10px] text-right mt-1"
          style={{ color: "var(--color-time)" }}
        >
          {time}
        </div>
      </div>
    </div>
  );
}
