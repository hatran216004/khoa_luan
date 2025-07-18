export type Message = {
  id: number;
  username?: string;
  text: string;
  timestamp: string;
  isMine: boolean;
  isNotification?: boolean;
  reactions?: { [key: string]: number };
};
