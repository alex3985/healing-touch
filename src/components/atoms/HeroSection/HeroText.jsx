import heroText from "@/assets/image/Hero-Image/hero-text.png";

export default function HeroText() {
  return (
    <img
      src={heroText}
      alt="Масажна студія Healing Touch"
      className="
        block
        w-full
        max-w-[368px]
        md:max-w-[520px]
        lg:max-w-[733px]
        h-auto
        object-contain
      "
    />
  );
}