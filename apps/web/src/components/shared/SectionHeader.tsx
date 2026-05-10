"use client";

interface Props {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function SectionHeader({
  title,
  actionLabel,
  onAction,
}: Props) {

  return (

    <div className="flex mb-4 items-center justify-between gap-4">

      <h2
        className="
          text-base

          sm:text-lg

          font-semibold
          truncate
        "
      >
        {title}
      </h2>

      {actionLabel && (

        <button
          onClick={onAction}
          className="
            shrink-0

            text-xs

            sm:text-sm

            text-neutral-400
            hover:text-white
            transition
          "
        >
          {actionLabel}
        </button>

      )}

    </div>

  );
}