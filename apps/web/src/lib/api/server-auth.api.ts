import { headers } from "next/headers";
import { UserDTO } from "@repo/types";

export type User = {
  id: string
  email: string
  name: string
  image?: string
}


export async function getCurrentUserServer(): Promise<UserDTO | null> {

  try {

    const cookie = (await headers()).get("cookie")
  
    if (!cookie) return null
  
    const res = await fetch(
  
      `${process.env.API_URL}/auth/me`,
  
      {
        headers: {
          cookie,
        },
  
        cache: "no-store",
      }
    )
  
    if (!res.ok) return null
  
    const result = await res.json()
  
    return result.data

  } catch{
    return null
  }

}