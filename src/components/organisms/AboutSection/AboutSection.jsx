import AboutImageBlock from "@/components/molecules/AboutSection/AboutImageBlock";
import AboutHeader from "@/components/molecules/AboutSection/AboutHeader";
import AboutTextBlock from "@/components/molecules/AboutSection/AboutTextBlock";
import ContactButtons from "@/components/molecules/AboutSection/ContactButtons";
import flowerAbout from "@/assets/image/About-Image/Flower-About.png";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white overflow-visible">
      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-[30px] lg:px-[40px] 3xl:px-[80px]
          max-md:min-h-[1064px]
          pb-[39.5px] lg:pb-[100px]
          xl:h-[900px] xl:min-h-[900px]
        "
      >
        <img
          src={flowerAbout}
          alt="Decorative Flower"
          loading="lazy"
          className="
            absolute pointer-events-none select-none object-contain
            z-0
            origin-center
            w-[304.27032470703125px] h-[307.8849792480469px]
            top-[-30px]
            left-[53.5%]
            sm:left-[54%]
            md:left-[55%]
            lg:left-[47%]
            xl:left-[48%]
            2xl:w-[334.27032470703125px] 2xl:h-[338.2413635253906px]
            2xl:top-[0px]
            2xl:left-[1277px]
          "
        />

        <div
          className="
            flex flex-col
            lg:flex-row lg:justify-center
            lg:items-center 2xl:items-start
            lg:gap-[60px] xl:gap-[90px] 2xl:gap-[120px]
            relative z-10
          "
        >
          {/* IMAGE COLUMN */}
          <div
            className="
              flex-shrink-0
              pt-[40px] md:pt-[60px] lg:pt-[100px]
              flex justify-center lg:justify-start
            "
          >
            <AboutImageBlock />
          </div>

          {/* TEXT COLUMN */}
          <div
            className="
              flex flex-col text-[#703938]
              mt-[40px] md:mt-[50px] lg:mt-[140px] xl:mt-[178px]
              items-center lg:items-start
              text-center lg:text-left
            "
          >
            <AboutHeader />

            <div className="mt-[20px] lg:mt-0 w-full">
              <AboutTextBlock />
            </div>

            <div className="mt-[40px] w-full">
              <ContactButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}