import Sidebar from "@/components/app/Sidebar"
import MusicPlayer from "@/components/app/MusicPlayer"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="h-screen flex flex-col bg-black text-white">

      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

      <MusicPlayer />

    </div>
  )
}