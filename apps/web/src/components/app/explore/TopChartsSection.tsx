"use client";

import { useRef, useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import VerticalScrollArrow from "@/components/ui/VerticalScrollArrow";
import SongRow from "../SongRow";
import cn from "@/lib/utils/cn";

export interface Song {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
}

interface Props {
  songs: Song[];
}

const INITIAL_VISIBLE = 5;
const SCROLL_AMOUNT = 120;

export default function TopChartsSection({ songs }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleSongs = expanded ? songs : songs.slice(0, INITIAL_VISIBLE);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 5);

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
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      setCanScrollUp(false);
    }

    setExpanded((prev) => !prev);
    setTimeout(checkScroll, 100);
  }

  return (
    <div className="bg-neutral-900 rounded-xl p-4">
      <SectionHeader
        title="Top Charts"
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
            "space-y-1 pr-6 h-75",
            expanded ? "overflow-y-auto scrollbar-hide" : "overflow-hidden"
          )}
        >
          {visibleSongs.map((song, i) => (
            <SongRow
              key={song.id}
              index={i + 1}
              song={song}
              allSongs={visibleSongs}
              songIndex={i}
            />
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