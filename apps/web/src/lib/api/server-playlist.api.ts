import { headers } from "next/headers"

export async function getPlaylistsServer() {

  const cookie = (await headers()).get("cookie")

  if (!cookie) return []

  const res = await fetch(

    `${process.env.API_URL}/playlists`,

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