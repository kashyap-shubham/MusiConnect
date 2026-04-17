import { UserDTO } from "@repo/types";


export async function getCurrentUserServer(cookie: string): Promise<UserDTO | null> {

  try {
 
    const res = await fetch(
  
      `${process.env.API_URL}/auth/me`,
  
      {
        headers: {
          cookie,
        },
  
        cache: "no-store",
      }
    );
  
    if (!res.ok) return null;
  
    const result = await res.json();
  
    return result.data;

  } catch{
    return null;
  }

}