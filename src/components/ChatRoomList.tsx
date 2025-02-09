import { Link, useParams } from "react-router-dom";

import { auth } from "../firebase";
import { ChatRooms } from "../constants/app.constants";

function ChatRoomList() {
  const { room } = useParams<{ room: string }>();

  const signOut = () => {
    auth.signOut();
  };

  return (
    <aside
      id="default-sidebar"
      className="h-full w-64 px-5 py-6  bg-gray-100 flex flex-col"
      aria-label="Sidebar"
    >
      <h2 className="text-xl font-semibold mb-5 text-gray-800">Chat Rooms</h2>
      <ul className="space-y-2">
        {Object.values(ChatRooms).map((chatRoom) => (
          <li key={chatRoom} className="mb-2">
            <Link
              to={`/chat/${chatRoom}`}
              className={`block px-4 py-2 rounded ${
                room === chatRoom
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {chatRoom}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="bg-red-500 text-white px-4 py-2 mt-auto rounded-lg shadow-md hover:bg-red-600 transition font-medium"
        onClick={signOut}
      >
        Sign Out
      </button>
    </aside>
  );
}

export default ChatRoomList;
