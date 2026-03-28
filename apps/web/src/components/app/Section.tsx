export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {

  return (
    <section className="space-y-4">

      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      {children}

    </section>
  )
}