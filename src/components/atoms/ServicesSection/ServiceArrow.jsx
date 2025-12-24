export default function ServicesArrow({ direction = "right", disabled, onClick }) {
  const isLeft = direction === "left";

  const arrowImg = (
    <img
      src={new URL("/src/assets/image/Services-Image/arrow.png", import.meta.url).href}
      className={`w-[15px] h-[14px] object-contain ${isLeft ? "rotate-180" : ""}`}
      alt="arrow"
    />
  );

  // === DISABLED VERSION (без кружка, але ТИМ ЖЕ РОЗМІРОМ!) ===
  if (disabled) {
    return (
      <div
        className="
          w-[50px] h-[50px]
          flex items-center justify-center
          pointer-events-none
        "
      >
        {arrowImg}
      </div>
    );
  }

  // === NORMAL VERSION (кружок) ===
  return (
    <button
      onClick={onClick}
      className="
        w-[50px] h-[50px]
        border border-[#F3D9D8]
        rounded-full
        flex items-center justify-center
        bg-white
      "
    >
      {arrowImg}
    </button>
  );
}