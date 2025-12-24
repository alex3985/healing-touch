import { useMemo, useRef, useState, useEffect } from "react";

import VideoFrame from "@/components/molecules/MoreAboutSection/VideoFrame";
import VideoDots from "@/components/molecules/MoreAboutSection/VideoDots";
import VideoArrow from "@/components/atoms/MoreAboutSection/VideoArrow";

/* videos */
import v1 from "@/assets/video/MoreAboutSection/video-1.MOV";
import v2 from "@/assets/video/MoreAboutSection/video-2.MOV";
import v3 from "@/assets/video/MoreAboutSection/video-3.MOV";
import v4 from "@/assets/video/MoreAboutSection/video-4.MOV";
import v5 from "@/assets/video/MoreAboutSection/video-5.MOV";
import v6 from "@/assets/video/MoreAboutSection/video-6.MOV";

export default function VideoSlider({ variant = "responsive" }) {
  const videos = useMemo(() => [v1, v2, v3, v4, v5, v6], []);
  const total = videos.length;

  /* ===================== PHONE (swipe) ===================== */
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  const [activeMobile, setActiveMobile] = useState(0);

  const getStep = () => {
    // width of one card + gap(20)
    const first = itemRefs.current?.[0];
    const w = first?.offsetWidth || 264.0625;
    return w + 20;
  };

  const onMobileScroll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const el = scrollerRef.current;
      if (!el) return;

      const step = getStep();
      const idx = Math.round(el.scrollLeft / step);
      const safe = Math.max(0, Math.min(total - 1, idx));
      setActiveMobile(safe);
    });
  };

  const onMobileDotClick = (i) => {
    const node = itemRefs.current[i];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ===================== TABLET+ (2 videos + arrows) ===================== */
  const perView = 2;
  const [index, setIndex] = useState(0); // 0,2,4...
  const totalGroups = Math.ceil(total / perView);
  const activeGroup = Math.floor(index / perView);

  const canPrev = index > 0;
  const canNext = index + perView < total;

  const onPrev = () => setIndex((i) => Math.max(0, i - perView));
  const onNext = () => setIndex((i) => Math.min(total - perView, i + perView));

  const visibleVideos = useMemo(() => {
    if (index + perView >= total) return videos.slice(total - perView, total);
    return videos.slice(index, index + perView);
  }, [index, perView, total, videos]);

  const onGroupDotClick = (dotIndex) => setIndex(dotIndex * perView);

  /* ===================== EXACT 1920 (НЕ ЧІПАЄМО ВЕРСТКУ) ===================== */
  if (variant === "desktop1920") {
    return (
      <div className="relative mt-[108px] ml-[95px] w-[706px] h-[640px]">
        {/* arrows (ті самі позиції, тільки напрям правильний) */}
        <div>
          <div className="absolute left-[-80px] pointer-events-auto mt-[310px]">
            <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />
          </div>

          <div className="absolute right-[-80px] pointer-events-auto mt-[310px]">
            <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
          </div>
        </div>

        {/* videos */}
        <div className="flex gap-[30px]">
          {visibleVideos.map((src, i) => (
            <VideoFrame key={`${index}-${i}`} src={src} />
          ))}
        </div>

        {/* dots */}
        <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2">
          <VideoDots
            activeIndex={activeGroup}
            totalGroups={totalGroups}
            onDotClick={onGroupDotClick}
          />
        </div>
      </div>
    );
  }

  /* ===================== MOBILE (<640px) ===================== */
  if (variant === "mobile") {
    return (
      <div className="w-full">
        <div
          ref={scrollerRef}
          onScroll={onMobileScroll}
          className="
            overflow-x-auto overflow-y-visible
            flex gap-[20px]
            pl-0 pr-[30px]
            snap-x snap-mandatory
            scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {videos.map((src, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="shrink-0 snap-start"
            >
              <VideoFrame src={src} />
            </div>
          ))}
        </div>

        {/* dots: 6 (one per video) */}
        <div className="mt-[30px] flex justify-center px-[30px]">
          <VideoDots
            activeIndex={activeMobile}
            totalGroups={total}
            onDotClick={onMobileDotClick}
          />
        </div>

        {/* bottom spacing: 39.5px */}
        <div className="h-[39.5px]" />
      </div>
    );
  }

  /* ===================== TABLET (640–1449): arrows below ===================== */
  if (variant === "tablet") {
    return (
      <div className="w-full">
        {/* videos */}
        <div className="flex justify-center gap-[20px] min-[1033px]:gap-[30px]">
          {visibleVideos.map((src, i) => (
            <VideoFrame key={`${index}-${i}`} src={src} />
          ))}
        </div>

        {/* arrows below videos */}
        <div className="flex items-center justify-center gap-[12px] mt-[20px]">
          <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />
          <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
        </div>

        {/* dots: groups (3 dots for 6 videos / 2) */}
        <div className="mt-[20px] flex justify-center">
          <VideoDots
            activeIndex={activeGroup}
            totalGroups={totalGroups}
            onDotClick={onGroupDotClick}
          />
        </div>
      </div>
    );
  }

  /* ===================== LAPTOP (1450–1919): arrows on sides ===================== */
  if (variant === "laptop") {
    return (
      <div className="w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-center">
          {/* LEFT arrow */}
          <div className="shrink-0 mr-[19px]">
            <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />
          </div>

          {/* videos */}
          <div className="flex justify-center gap-[20px] min-[1024px]:gap-[30px] shrink-0">
            {visibleVideos.map((src, i) => (
              <VideoFrame key={`${index}-${i}`} src={src} />
            ))}
          </div>

          {/* RIGHT arrow */}
          <div className="shrink-0 ml-[19px]">
            <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
          </div>
        </div>

        {/* dots: groups (3 dots for 6 videos / 2) */}
        <div className="mt-[30px] flex justify-center">
          <VideoDots
            activeIndex={activeGroup}
            totalGroups={totalGroups}
            onDotClick={onGroupDotClick}
          />
        </div>
      </div>
    );
  }

  /* ===================== RESPONSIVE (fallback, 640–1919) ===================== */
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-[12px] px-[30px]">
        {/* LEFT arrow */}
        <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />

        {/* videos */}
        <div className="flex justify-center gap-[20px] lg:gap-[30px]">
          {visibleVideos.map((src, i) => (
            <VideoFrame key={`${index}-${i}`} src={src} />
          ))}
        </div>

        {/* RIGHT arrow */}
        <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
      </div>

      {/* dots: groups (3 dots for 6 videos / 2) */}
      <div className="mt-[30px] flex justify-center">
        <VideoDots
          activeIndex={activeGroup}
          totalGroups={totalGroups}
          onDotClick={onGroupDotClick}
        />
      </div>
    </div>
  );
}