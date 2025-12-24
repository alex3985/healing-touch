import ServiceImage from "@/components/atoms/ServicesSection/ServiceImage";
import ServiceCardTitle from "@/components/atoms/ServicesSection/ServiceCardTitle";
import ServiceCardText from "@/components/atoms/ServicesSection/ServiceCardText";
import ServiceCardBoldText from "@/components/atoms/ServicesSection/ServiceCardBoldText";
import ServiceButton from "@/components/atoms/ServicesSection/ServiceButton";

export default function ServiceCard({ img, title, text, boldText }) {
  return (
    <div
      className="
        bg-white flex flex-col items-start
        w-full max-w-[368px] h-[525px]
        md:max-w-[380px] md:h-[540px]
        lg:max-w-[400px] lg:h-[650px]
        2xl:max-w-[460px] 2xl:h-[700px]
        shrink-0
      "
    >
      {/* IMAGE - фіксована висота для всіх карток */}
      <div className="
        w-full h-[224px] mb-[20px]
        md:h-[230px] md:mb-[22px]
        lg:h-[240px] lg:mb-[24px]
        2xl:h-[280px] 2xl:mb-[26px]
        overflow-hidden
        rounded-[30px] md:rounded-[35px] lg:rounded-[40px] 2xl:rounded-[50px]
        shrink-0
      ">
        <ServiceImage
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-[30px] md:rounded-[35px] lg:rounded-[40px] 2xl:rounded-[50px]"
        />
      </div>

      {/* TITLE - фіксована висота для всіх карток */}
      <div className="w-full mb-[10px] 2xl:mb-[15px] shrink-0 min-h-[52px] md:min-h-[54px] lg:min-h-[56px] 2xl:min-h-[65px]">
        <ServiceCardTitle className="line-clamp-2">{title}</ServiceCardTitle>
      </div>

      {/* Контейнер для TEXT та BOLD TEXT - text може розтягуватися, але не заходить на boldText */}
      <div className="w-full mb-[20px] flex-grow flex flex-col min-h-0">
        {/* TEXT - може розтягуватися */}
        <div className="w-full mb-[10px] 2xl:mb-[14px] flex-grow min-h-0">
          <ServiceCardText>{text}</ServiceCardText>
        </div>

        {/* BOLD TEXT - завжди видимий, не перекривається */}
        <div className="w-full shrink-0 ">
          <ServiceCardBoldText>{boldText}</ServiceCardBoldText>
        </div>
      </div>

      {/* BUTTON - фіксована висота для всіх карток */}
      <div className="w-full h-[60px] mt-auto shrink-0">
        <form
          action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
          target="_blank"
        >
          <ServiceButton>Записатися</ServiceButton>
        </form>
      </div>
    </div>
  );
}