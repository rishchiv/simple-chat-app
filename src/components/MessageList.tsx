import { useEffect, useState } from "react";
import {
  query,
  where,
  orderBy,
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";
import { IMessage } from "../types/message";
import Message from "./Message";

type MessageInputProps = {
  room: string;
};

function MessageList({ room }: MessageInputProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const messageRef = collection(db, "messages");

    const queryRoomMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryRoomMessages, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IMessage))
      );
    });

    return () => unsubscribe();
  }, [room]);

  return (
    <div className="space-y-2">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          user={msg.user}
          text={msg.text}
          userId={msg.userId}
          profileUrl={msg.profileUrl}
          createdAt={msg.createdAt}
        />
      ))}
    </div>
  );
}

export default MessageList;
