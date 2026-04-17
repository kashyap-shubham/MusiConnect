import Header from "@/components/app/Header";
import Sidebar from "@/components/app/Sidebar";
import { getCurrentUserServer } from "@/lib/api/server-auth.api";
import { getPlaylistsServer } from "@/lib/api/server-playlist.api";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function AppLayout({ 
    children, 
}: {
    children: React.ReactNode
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
        <div className="h-screen flex text-white">
    
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10">
                <Sidebar playlists={playlists} />
            </aside>

            {/* RIGHT COLUMN */}
            <div className="flex flex-1 flex-col">

                {/* Header */}
                <div className="px-10 pt-6">
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