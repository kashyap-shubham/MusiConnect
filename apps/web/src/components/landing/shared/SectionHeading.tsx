interface Props {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : ""
      }`}
    >
      {badge && (
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/60 backdrop-blur-xl">
          {badge}
        </div>
      )}

      <h2 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}