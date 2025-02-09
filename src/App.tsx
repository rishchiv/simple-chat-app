import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import ChatRoom from "./components/ChatRoom";
import ChatRoomList from "./components/ChatRoomList";
import Welcome from "./components/Welcome";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        Loading...
      </main>
    );
  }

  if (!user) {
    return <Welcome />;
  }

  return (
    <div className="h-screen flex">
      <Router>
        <ChatRoomList />
        <div className="flex-grow bg-white">
          <Routes>
            <Route path="/chat/:room" element={<ChatRoom />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
