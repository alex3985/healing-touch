import HeroText from "@/components/atoms/HeroSection/HeroText";
import HeroCTA from "@/components/molecules/HeroSection/HeroCTA";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <div
        className="
          h-full w-full
          flex flex-col items-center
          pt-[277px]
          lg:pt-0 lg:justify-center
          px-4
          min-[430px]:px-[30px]
          lg:px-0
        "
      >
        {/* HERO TEXT: always centered, responsive width (no left drifting) */}
        <HeroText />

        {/* CTA */}
        <div className="mt-[40px] w-full flex justify-center">
          <HeroCTA />
        </div>
      </div>
    </div>
  );
}