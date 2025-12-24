import arrow from "@/assets/image/Masters-Image/arrow.png";

export default function LearnMoreButton({ onClick, variant = "desktop" }) {
  const isMobile = variant === "mobile";

  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-[15px] whitespace-nowrap
        ${isMobile ? "w-[146px] h-[21px]" : "w-[167px] h-[23px]"}
      `}
      type="button"
    >
      <span
        className={`
          relative text-white font-manrope font-[300] leading-[130%] whitespace-nowrap
          ${isMobile ? "text-[16px]" : "text-[18px]"}
        `}
      >
        Дізнатися більше
        <span
          className="absolute left-0 right-0 bottom-0 bg-white"
          style={{ height: "0.3px", opacity: 0.7 }}
        />
      </span>

      <img
        src={arrow}
        alt="arrow"
        className={`w-[11px] h-[11px] relative ${isMobile ? "mt-[4px]" : "mt-[6px]"}`}
      />
    </button>
  );
}