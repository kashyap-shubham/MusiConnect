export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">

      {children}

    </main>

  )

}