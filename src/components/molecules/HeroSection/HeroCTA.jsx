import HeroButton from "@/components/atoms/HeroSection/HeroButton";
import FlowerBlock from "@/components/atoms/HeroSection/FlowerBlock";
import HeroSubText from "@/components/atoms/HeroSection/HeroSubText";

export default function HeroCTA() {
  return (
    <div className="flex flex-col items-center z-[5] pointer-events-auto">
      {/* CTA wrapper: 230×60 (mobile), 305×80 (desktop) */}
      <div className="relative w-[230px] h-[60px] lg:w-[305px] lg:h-[80px] overflow-visible">
        {/* Flower behind button (exact mobile left: 131.97px) */}
        <FlowerBlock className="left-[131.97px] lg:left-auto lg:right-0" />

        {/* Button on top (exact mobile width: 180.9836px) */}
        <div className="relative z-[10] w-[180.9836px] h-[60px] lg:w-[240px] lg:h-[80px]">
          <HeroButton />
        </div>
      </div>

      <HeroSubText />
    </div>
  );
}