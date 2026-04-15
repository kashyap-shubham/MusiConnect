import Header from "@/components/app/Header";
import Sidebar from "@/components/app/Sidebar";
import { getCurrentUserServer } from "@/lib/api/server-auth.api";
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
    
    // fetch sidebar playlist data
    const playlists = await getPlaylistsServer(user.id)

    return (
        <div className="h-screen flex text-white">
    
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10">
                <Sidebar playlists={playlists} />
            </aside>

            {/* RIGHT COLUMN */}
            <div className="flex flex-1 flex-col">

                {/* Header */}
                <div className="px-10 pt-8">
                    <Header user={user}/>
                </div>
                
                {/* Page Content */}
                <main className="flex-1 overflow-y-auto px-10 pb-10">
                    {children}
                </main>
                
            </div>

        </div>
    );

}