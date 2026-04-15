import Sidebar from "@/components/app/Sidebar"
import { getCurrentUserServer } from "@/lib/api/server-auth.api"
import { getPlaylistsServer } from "@/lib/api/server-playlist.api";
import { redirect } from "next/navigation";


export default async function AppLayout({ 
    children, 
}: {
    children: React.ReactNode
}) {

    // verify session
    const user = await getCurrentUserServer();

    if (!user) {
        redirect("signin")
    }
    
    // fetch user data
    const playlists = await getPlaylistsServer(user.id)

    return (
        <div className="h-screen text-white flex">
    
            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/10">
                <Sidebar playlists={playlists} />
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>

        </div>
    );

}