import { Plus, Send, SmileIcon } from "lucide-react";
import { useState } from "react";

export default function InputMessage() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div
      className="p-4 border-t flex items-center gap-2"
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--color-border)",
      }}
    >
      <button
        className="hover:opacity-80"
        style={{ color: "var(--color-icon)" }}
      >
        <Plus size={20} />
      </button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2"
        style={{
          background: "var(--color-bg-input)",
          color: "var(--color-text)",
          borderColor: "var(--color-border-input)",
          outlineColor: "var(--color-ring)",
        }}
        placeholder="Type your message..."
      />

      <button
        className="hover:opacity-80"
        style={{ color: "var(--color-icon)" }}
      >
        <SmileIcon size={20} />
      </button>

      <button
        onClick={handleSend}
        className="flex items-center gap-1 px-4 py-2 rounded-full text-white"
        style={{ background: "var(--color-ring)" }}
      >
        <Send size={16} />
        <span className="text-sm">Send</span>
      </button>
    </div>
  );
}
