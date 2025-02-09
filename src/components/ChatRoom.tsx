import { useParams } from "react-router-dom";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatRoom() {
  const { room } = useParams<{ room: string }>();

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold p-4 bg-gray-100 shadow">{room} chat</h2>
      <div className="p-4 flex flex-col h-[calc(100%-64px)]">
        <div className="flex-grow overflow-auto p-4">
          <MessageList room={room} />
        </div>
        <MessageInput room={room} />
      </div>
    </div>
  );
}

export default ChatRoom;
