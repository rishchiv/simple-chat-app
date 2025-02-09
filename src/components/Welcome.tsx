import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

function Welcome() {
  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Welcome to Simple Chat</h2>
      <button
        className="sign-in bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
        onClick={googleSignIn}
      >
        Sign In with Google
      </button>
    </main>
  );
}

export default Welcome;
