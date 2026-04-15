import { headers } from "next/headers"

export async function getPlaylistsServer(userId: string) {

  const cookie = (await headers()).get("cookie")

  if (!cookie) return []

  const res = await fetch(

    `${process.env.NEXT_PUBLIC_API_URL}/playlists?userId=${userId}`,

    {
      headers: {
        cookie,
      },

      cache: "no-store",
    }
  )

  if (!res.ok) return []

  const result = await res.json()

  return result.data

}