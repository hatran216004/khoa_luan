import { useEffect, useState } from 'react';
import MessageItem from './MessageItem';
import { Message } from '../types/message.type';

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    import('../data/messages.json').then((data) => {
      setMessages(data.default as Message[]);
    });
  }, []);

  return (
    <div
      className="flex-1 overflow-y-auto p-4"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      {messages.map((m) => (
        <MessageItem key={m.id} message={m} />
      ))}
    </div>
  );
}
