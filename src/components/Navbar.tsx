"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
const [user, setUser] = useState<any>(null);

useEffect(() => {
const currentUser = JSON.parse(
localStorage.getItem("user") || "null"
);

setUser(currentUser);
}, []);

const logout = () => {
localStorage.removeItem("user");
window.location.reload();
};

return ( <nav className="bg-blue-600 text-white shadow-md"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <Link
       href="/"
       className="text-2xl font-bold"
     >
College Discovery </Link>


    <div className="flex items-center gap-6">
      <Link
        href="/"
        className="hover:text-gray-200 transition"
      >
        Home
      </Link>

      <Link
        href="/saved"
        className="hover:text-gray-200 transition"
      >
        Saved Colleges
      </Link>

      <Link
        href="/compare"
        className="hover:text-gray-200 transition"
      >
        Compare Colleges
      </Link>

      {!user ? (
        <>
          <Link
            href="/login"
            className="hover:text-gray-200 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <span className="text-sm">
            👤 {user.email}
          </span>

          <button
            onClick={logout}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium"
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>
</nav>


);
}
