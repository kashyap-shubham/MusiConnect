"use client";

import { useAuth } from "@/hooks/useAuth";
import UserMenu from "./UserMenue";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-neutral-800 px-6 py-3">
      <h1 className="text-lg font-semibold">MusiConnect</h1>

      {user && <UserMenu user={user} />}
    </header>
  );
}