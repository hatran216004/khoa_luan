import Avatar from '../ui/Avatar';
import ItemChat from '../ui/ItemChat';

export default function ConversationList() {
  return (
    <div className="flex flex-col gap-2">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <ItemChat key={index}>
            <Avatar src="/src/assets/10001.png" size="m" />
          </ItemChat>
        ))}
    </div>
  );
}
