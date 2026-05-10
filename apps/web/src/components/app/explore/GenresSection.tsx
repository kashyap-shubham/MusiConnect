"use client";

import { useRef, useState } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import VerticalScrollArrow from "@/components/ui/VerticalScrollArrow";

import cn from "@/lib/utils/cn";

export interface Genre {
  id: string;
  name: string;
  color: string;
}

interface Props {
  genres: Genre[];
}

const INITIAL_VISIBLE = 6;
const SCROLL_AMOUNT = 120;

export default function GenresSection({ genres }: Props) {
  const [expanded, setExpanded] = useState(false);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleGenres = expanded ? genres : genres.slice(0, INITIAL_VISIBLE);

  function checkScroll() {
    const el = scrollRef.current;

    if (!el) return;

    setCanScrollUp(el.scrollTop > 0);

    setCanScrollDown(
      el.scrollTop < el.scrollHeight - el.clientHeight - 5
    );

    setScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setScrolling(false);
    }, 400);
  }

  function scroll(direction: "up" | "down") {
    const el = scrollRef.current;

    if (!el) return;

    el.scrollBy({
      top: direction === "up" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }

  function toggleExpanded() {
    if (expanded && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setCanScrollUp(false);
    }

    setExpanded((prev) => !prev);

    setTimeout(checkScroll, 100);
  }

  return (
    <div className="bg-neutral-900 rounded-xl p-4">
      <SectionHeader
        title="Genres"
        actionLabel={expanded ? "See less" : "See all"}
        onAction={toggleExpanded}
      />

      <div className="relative">
        <VerticalScrollArrow
          direction="up"
          visible={expanded && canScrollUp}
          onClick={() => scroll("up")}
          active={scrolling}
        />

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className={cn(
            `
              grid
              grid-cols-2

              gap-3

              pr-0
              sm:pr-6

              h-64
              sm:h-75
            `,

            expanded
              ? "overflow-y-auto scrollbar-hide"
              : "overflow-hidden",
          )}
        >
          {visibleGenres.map((genre) => (
            <div
              key={genre.id}
              className={`
                ${genre.color}

                rounded-lg

                p-3

                text-xs
                sm:text-sm

                font-medium
                text-white

                h-14
                sm:h-16

                flex
                items-end

                truncate
              `}
            >
              {genre.name}
            </div>
          ))}
        </div>

        <VerticalScrollArrow
          direction="down"
          visible={expanded && canScrollDown}
          onClick={() => scroll("down")}
          active={scrolling}
        />
      </div>
    </div>
  );
}