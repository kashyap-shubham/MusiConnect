"use client";
import { UserDTO } from "@repo/types";
import Image from "next/image";

type Props = {
  user?: UserDTO;
};

export default function ProfileSection({ user }: Props) {
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
    <div
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
    </div>
  );
}
