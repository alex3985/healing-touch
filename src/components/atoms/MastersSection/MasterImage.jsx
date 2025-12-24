import LearnMoreButton from "./LearnMoreButton";

export default function MasterImage({ src, alt, onOpen, variant = "desktop" }) {
  if (variant === "mobile") {
    return (
      <div className="relative w-[338px] h-[440px] overflow-hidden shrink-0 rounded-[50px]">
        <img src={src} alt={alt} className="w-full h-full object-cover object-center block" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#C08984]" />

        {/* centered button (mobile spec placement) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[17px]">
          <LearnMoreButton onClick={onOpen} variant="mobile" />
        </div>
      </div>
    );
  }

  // 1920 as-is
  return (
    <div className="relative w-[338px] h-[440px] overflow-hidden shrink-0 rounded-[50px]">
      <img src={src} alt={alt} className="w-full h-full object-cover object-center block" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#C08984]" />

      <div className="absolute left-[91px] bottom-[15px]">
        <LearnMoreButton onClick={onOpen} variant="desktop" />
      </div>
    </div>
  );
}