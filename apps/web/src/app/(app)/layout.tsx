import AppShell from "@/components/app/AppShell";

import { getCurrentUserServer } from "@/lib/api/server-auth.api";
import { getPlaylistsServer } from "@/lib/api/server-playlist.api";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = (await headers()).get("cookie");

  if (!cookie) {
    redirect("/signin");
  }

  const [user, playlists] = await Promise.all([
    getCurrentUserServer(cookie),
    getPlaylistsServer(cookie),
  ]);

  // verify session
  if (!user) {
    redirect("/signin");
  }

  return (
    <AppShell
      user={user}
      playlists={playlists}
    >
      {children}
    </AppShell>
  );
}