import bg from "@/assets/image/Hero-Image/backgr-hero.jpg";

export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 z-[1] bg-[#00000066] pointer-events-none" />
    </>
  );
}