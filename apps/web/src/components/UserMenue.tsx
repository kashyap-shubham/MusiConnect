"use client";

import { logout } from "@/services/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserMenu({ user }: { user: any }) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/signin");
  };

  return (
    <div className="flex items-center gap-3">
      {user.image && (
        <Image
          src={user.image}
          alt="user"
          className="h-8 w-8 rounded-full"
        />
      )}

      <span className="text-sm">{user.name}</span>

      <button
        onClick={handleLogout}
        className="rounded-md bg-neutral-800 px-3 py-1 text-sm hover:bg-neutral-700"
      >
        Logout
      </button>
    </div>
  );
}