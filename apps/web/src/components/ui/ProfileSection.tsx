"use client"
import { UserDTO } from "@repo/types";
import Image from "next/image"


type Props = {
  user?: UserDTO;
}

export default function ProfileSection({ user }: Props) {

  if (!user) {

    return (
      <div className="
        flex items-center gap-3
        px-3 py-1.5
        rounded-lg
        bg-white/5
        border border-white/10
      ">

        <div className="
          h-7 w-7
          rounded-full
          bg-white/20
        "/>

        <p className="text-sm text-white/40">
          Loading...
        </p>

      </div>

    )

  }

  return (

    <div className="
      flex items-center gap-3
      px-3 py-1.5
      rounded-lg
      bg-white/5
      border border-white/10
      hover:bg-white/10
      cursor-pointer
      transition
    ">

      {/* avatar/image */}
      <div className="
        relative
        h-7 w-7
        overflow-hidden
        bg-white/20
      ">

        {user.image && (

          <Image
            alt={user.name}
            src={user.image}
            fill
            className="object-cover"
          />
        )}

      </div>

      {/* name */}
      <p className="text-sm">
        {user.name}
      </p>
    
    </div>
  )

}