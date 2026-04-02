"use client";


interface Props {
  title: string
  onSeeAll?: () => void
}

export default function SectionHeader({
  title,
  onSeeAll
}: Props) {

  return (

    <div className="flex items-center justify-between">

      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <button
        onClick={onSeeAll}
        className="
          text-sm
          text-neutral-400
          hover:text-white
          transition
        "
      >
        See all
      </button>

    </div>

  );
}