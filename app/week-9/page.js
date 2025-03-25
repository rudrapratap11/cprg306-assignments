"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-8 min-h-screen bg-gray-900 text-white">
      {!user ? (
        <div className="text-center">
          <h1 className="text-3xl mb-4">Welcome to the Shopping List App</h1>
          <button
            onClick={gitHubSignIn}
            className="p-2 bg-blue-500 rounded text-white"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl mb-4">Welcome, {user.displayName}</h1>
          <p className="mb-4">Email: {user.email}</p>
          <button
            onClick={firebaseSignOut}
            className="p-2 bg-red-500 rounded text-white mb-4"
          >
            Logout
          </button>
          <div>
            <Link href="/week-9/shopping-list" className="p-2 bg-green-500 rounded text-white">
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}