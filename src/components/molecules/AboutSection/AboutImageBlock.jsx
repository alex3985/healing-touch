import ImageRounded from "@/components/atoms/AboutSection/ImageRounded";
import massageWoman from "@/assets/image/About-Image/massage-woman.jpg";
import flowerAbout from "@/assets/image/About-Image/Flower-About.png";

export default function AboutImageBlock() {
  return (
    <div className="relative w-fit mx-auto lg:mx-0">
      {/* ONE FLOWER scaled with photo */}


      <ImageRounded
        src={massageWoman}
        alt="Massage woman relaxing"
        className="
          relative z-10 object-cover
          rounded-[50px]
          w-[368px] h-[368px]
          sm:w-[440px] sm:h-[440px] sm:rounded-[60px]
          md:w-[520px] md:h-[520px] md:rounded-[70px]
          lg:w-[620px] lg:h-[620px] lg:rounded-[90px]
          xl:w-[700px] xl:h-[700px] xl:rounded-[100px] 
        "
      />
    </div>
  );
}