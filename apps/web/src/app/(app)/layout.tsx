import Sidebar from "@/components/app/Sidebar"
import { getPlaylists } from "@/lib/api/playlist.api"


export default async function AppLayout({ 
    children, 
}: {
    children: React.ReactNode
}) {
    
    const playlists = await getPlaylists("f03b2786-b51e-44ec-9677-7d1f2876fbc6")  // todo => add real user id here 
    console.log("playlists:", playlists)

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

    )

}