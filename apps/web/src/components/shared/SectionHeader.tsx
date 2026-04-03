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

    <div className="flex mb-4 items-center justify-between">

      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      {actionLabel && (

        <button
          onClick={onAction}
          className="
            text-sm
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