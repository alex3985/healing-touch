import arrowImg from "@/assets/image/MoreAbout-Image/arrow.png";

export default function VideoArrow({ direction = "right", disabled, onClick }) {
  // ВАЖЛИВО: припускаємо що arrow.png "дивиться ВЛІВО" за замовчуванням.
  // Тоді для RIGHT — rotate-180.
  const rotateClass = direction === "right" ? "rotate-180" : "";

  if (disabled) {
    return (
      <div className="w-[50px] h-[50px] flex items-center justify-center pointer-events-none opacity-50">
        <img
          src={arrowImg}
          className={`w-[15px] h-[14px] object-contain ${rotateClass}`}
          alt="arrow"
        />
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-[50px] h-[50px] border border-[#F3D9D8] rounded-full flex items-center justify-center bg-white"
      type="button"
    >
      <img
        src={arrowImg}
        className={`w-[15px] h-[14px] object-contain ${rotateClass}`}
        alt="arrow"
      />
    </button>
  );
}