export default function SongCard() {

  return (
    <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition cursor-pointer">

      <div className="aspect-square bg-white/10 rounded-lg mb-3"/>

      <p className="text-sm font-medium">
        Song name
      </p>

      <p className="text-xs opacity-60">
        Artist name
      </p>

    </div>
  )
}