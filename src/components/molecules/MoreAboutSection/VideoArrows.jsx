import VideoArrow from "@/components/atoms/MoreAboutSection/VideoArrow";

export default function VideoArrows({
  canPrev,
  canNext,
  onPrev,
  onNext,
  variant = "attached", // attached | desktop2xl
}) {
  // desktop2xl — залишаємо твої original позиції (1920×900)
  if (variant === "desktop2xl") {
    return (
      <div>
        <div className="absolute left-[-80px] pointer-events-auto mt-[310px]">
          <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />
        </div>

        <div className="absolute right-[-80px] pointer-events-auto mt-[310px]">
          <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
        </div>
      </div>
    );
  }

  // attached — стрілки ПРИВ’ЯЗАНІ до країв відео-ряду:
  // left-стрілка стає ЗЗОВНІ лівого відео (не налазить),
  // right-стрілка стає ЗЗОВНІ правого відео (не налазить)
  return (
    <>
      {/* PREV */}
      <div
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          -translate-x-full -ml-[12px]
          pointer-events-auto
        "
      >
        <VideoArrow direction="left" disabled={!canPrev} onClick={onPrev} />
      </div>

      {/* NEXT */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          translate-x-full mr-[12px]
          pointer-events-auto
        "
      >
        <VideoArrow direction="right" disabled={!canNext} onClick={onNext} />
      </div>
    </>
  );
}