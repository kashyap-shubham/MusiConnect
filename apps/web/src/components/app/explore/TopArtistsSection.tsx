"use client";

import { useRef, useState } from "react";

import ArtistsCard from "./ArtistsCard";

import SectionHeader from "@/components/shared/SectionHeader";

import ScrollArrow from "@/components/ui/ScrollArrow";

import cn from "@/lib/utils/cn";

export interface Artist {

  id: string;

  name: string;

  imageUrl: string;

  monthlyListeners?: string;

}

interface Props {

  artists: Artist[];

}

const INITIAL_VISIBLE = 5;

const SCROLL_AMOUNT = 220;

export default function TopArtistsSection({ artists }: Props) {

  const [expanded, setExpanded] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const [canScrollRight, setCanScrollRight] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // properly typed timeout ref
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleArtists = expanded
    ? artists
    : artists.slice(0, INITIAL_VISIBLE);

  function checkScroll() {

    const el = scrollRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);

    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 5
    );

    // trigger glow
    setScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setScrolling(false);
    }, 400);

  }

  function scroll(direction: "left" | "right") {

    const el = scrollRef.current;

    if (!el) return;

    el.scrollBy({
      left: direction === "left"
        ? -SCROLL_AMOUNT
        : SCROLL_AMOUNT,

      behavior: "smooth",
    });

  }

  function toggleExpanded() {

    if (expanded && scrollRef.current) {

      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      setCanScrollLeft(false);

    }

    setExpanded((prev) => !prev);

    setTimeout(checkScroll, 100);

  }

  return (

    <section className="space-y-4">

      <div
        className="
          bg-neutral-900
          rounded-xl

          p-3

          sm:p-4
        "
      >

        <SectionHeader
          title="Top Artists"
          actionLabel={expanded ? "See less" : "See all"}
          onAction={toggleExpanded}
        />

        <div className="relative px-1 sm:px-2">

          {/* left arrow */}
          <ScrollArrow
            direction="left"
            visible={expanded && canScrollLeft}
            onClick={() => scroll("left")}
            active={scrolling}
          />

          {/* scroll container */}
          <div
            ref={scrollRef}

            onScroll={checkScroll}

            className={cn(
              `
                flex

                gap-3
                sm:gap-4

                pb-2

                max-w-full
              `,

              expanded
                ? "overflow-x-auto scrollbar-hide"
                : "overflow-hidden",
            )}
          >

            {visibleArtists.map((artist, index) => (

              <div
                key={`${artist.id}-${index}`}

                className="
                  shrink-0

                  w-28

                  sm:w-32

                  md:w-36

                  lg:w-40
                "
              >

                <ArtistsCard artist={artist} />

              </div>

            ))}

          </div>

          {/* right arrow */}
          <ScrollArrow
            direction="right"
            visible={expanded && canScrollRight}
            onClick={() => scroll("right")}
            active={scrolling}
          />

        </div>

      </div>

    </section>

  );

}