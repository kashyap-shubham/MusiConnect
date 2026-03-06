import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>Songs</h1>
    <Link href="/songs/create">Create Song</Link>
    
    </>
  );
}
