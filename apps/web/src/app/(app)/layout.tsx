import Sidebar from "@/components/app/Sidebar"



export default function AppLayout({ 
    children, 
}: {
    children: React.ReactNode
}) {

    // temporary static playlists
    // const playlist = [ 
    //     {
    //         id: 1,
    //         name: "Flow"
    //     }
    // ]

    return (

        <div className="h-screen text-white flex">

        {/* SIDEBAR */}
        <aside className="w-64 border-r border-white/10">

            <Sidebar playlists={[]} />

        </aside>



        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto">

            {children}

        </main>


        </div>

    )

}