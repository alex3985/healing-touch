import HeroBackground from "@/components/atoms/HeroSection/HeroBackground";
import NavBar from "@/components/organisms/NavBar/NavBar";
import HeroContent from "@/components/molecules/HeroSection/HeroContent";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[760px] lg:min-h-[900px] overflow-hidden">
      <HeroBackground />
      <NavBar />
      <HeroContent />
    </section>
  );
}