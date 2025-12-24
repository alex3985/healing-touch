import SectionTitle from "@/components/atoms/AboutSection/SectionTitle";
import logoAbout from "@/assets/image/About-Image/Logo-About.png";

export default function AboutHeader() {
  return (
    <div
      className="
        flex flex-col text-[#703938] w-full max-w-[368px] lg:max-w-[641px]
        mx-auto lg:mx-0 items-center lg:items-start text-center lg:text-left
        
      "
    >
      <SectionTitle
        className="
          w-fit whitespace-nowrap
          text-[clamp(30px,3.2vw,50px)]
        "
      >
        Про Компанію
      </SectionTitle>

      <img
        src={logoAbout}
        alt="Logo About"
        className="
          object-contain
          w-[clamp(131px,16vw,252px)]
          h-auto
          mb-[20px]
          self-start ml-[169px]
        "
      />
    </div>
  );
}