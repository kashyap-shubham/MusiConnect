"use client";
import { api } from "@/lib/api/client";
import { UserDTO } from "@repo/types";
import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  user?: UserDTO;
};

export default function ProfileSection({ user }: Props) {
  
  const router = useRouter();
  
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
 
  
  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, []);

  // logout handler
  async function handleLogout() {

    try {
      await api("/auth/logout", {
        method: "POST",
      })
      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  if (!user) {
    return (
      <div
        className="
          flex items-center gap-3
          px-3 py-1.5
          rounded-lg
          bg-white/5
          border border-white/10
          w-52
        "
      >
        <div className="h-7 w-7 rounded-full bg-white/20 shrink-0" />

        <p className="text-sm text-white/40">Loading...</p>
      </div>
    );
  }

  /*
  safe values
  */
  const displayName = user.name?.trim() || user.email?.split("@")[0] || "User";

  const initials = displayName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div ref={ref} className="relative"> 

    {/* Profile button */}
    <button onClick={() => setOpen(prev => !prev)}
      className="
        flex items-center gap-3
        px-3 py-1.5
        rounded-lg
        bg-white/5
        border border-white/10
        hover:bg-white/10
        transition
        w-52
      "
    >
      {/* avatar */}
      <div className="relative h-7 w-7 rounded-full overflow-hidden bg-white/20 shrink-0">
        {user.image ? (
          <Image
            src={user.image}
            alt={displayName}
            fill
            sizes="28px"
            className="object-cover"
          />
        ) : (
          <div
            className="
              flex items-center justify-center
              h-full w-full
              text-xs font-medium
              text-white/80
            "
          >
            {initials}
          </div>
        )}
      </div>

      {/* name */}
      <p className="text-sm truncate">{displayName}</p>
    </button>

    {/* dropdown */}
    {open && (
      <div className="absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-neutral-900 shadow-xl overflow-hidden z-50">

        {/* profile */}
        <button onClick={() => {
          router.push("/profile");
          setOpen(false);
        }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-white/20 transition">
          <User size={16} /> 
          Profile
        </button>

        {/* settings */}
        <button onClick={() => {
          router.push("/settings");
          setOpen(false);
        }} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-white/20 transition">
          <Settings size={16} />
          Settings
        </button>

        <div className="border-t border-white/10"/>

        {/* logout */}
        <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-red-500/50 transition">
          <LogOut size={16} />
          Logout
        </button>

      </div>
    )}
    </div>
  );
}
