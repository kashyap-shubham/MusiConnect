import { redirect } from "next/navigation"
import { getCurrentUserServer } from "@/lib/api/server-auth.api"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getCurrentUserServer()

  if (user) {
    redirect("/explore")
  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-white">

      {children}

    </main>

  )

}