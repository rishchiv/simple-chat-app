import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../firebase";

type MessageInputProps = {
  room: string;
};

function MessageInput({ room }: MessageInputProps) {
  const inputData = useRef<HTMLInputElement>(null);

  const messageRef = collection(db, "messages");

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputData.current?.value.trim()) {
      return;
    }

    console.log("auth.currentUser", auth.currentUser);

    await addDoc(messageRef, {
      room,
      text: inputData.current?.value,
      user: auth.currentUser?.displayName,
      userId: auth.currentUser?.uid,
      profileUrl: auth.currentUser?.photoURL,
      createdAt: new Date(),
    });

    inputData.current.value = "";
  };

  return (
    <form className="p-4 flex bg-gray-100 shadow" onSubmit={sendMessage}>
      <input
        className="flex-grow p-2 border rounded"
        placeholder="Type a message..."
        ref={inputData}
      />

      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
  );
}

export default MessageInput;
