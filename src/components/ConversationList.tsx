import Avatar from "../ui/Avatar";
import ItemChat from "../ui/ItemChat";
import Empty from "../ui/Empty";

export default function ConversationList() {
  const conversations = Array(0);

  if (conversations.length == 0)
    return <Empty label="Bạn chưa có cuộc trò chuyện nào" />;
  return (
    <div className="flex flex-col gap-2 ">
      {conversations.fill(0).map((_, index) => (
        <ItemChat key={index}>
          <Avatar src="/src/assets/10001.png" size="m" />
        </ItemChat>
      ))}
    </div>
  );
}
