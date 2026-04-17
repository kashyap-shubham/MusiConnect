import { UserDTO } from "@repo/types";
import { serverApi } from "./http-server";

export async function getCurrentUserServer(
  cookie: string,
): Promise<UserDTO | null> {
  try {
    return await serverApi<UserDTO>("auth/me", cookie);
  } catch {
    return null;
  }
}
