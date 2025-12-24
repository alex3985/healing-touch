import InfoIcon from "@/components/atoms/InfoSection/InfoIcon";
import InfoTitle from "@/components/atoms/InfoSection/InfoTitle";
import InfoText from "@/components/atoms/InfoSection/InfoText";

export default function InfoCard({ iconSrc, iconAlt, title, text }) {
  return (
    <article className="shrink-0">
      {/* MOBILE / TABLET (430x763) */}
      <div className="lg:hidden w-[368px] max-w-full">
        <InfoIcon src={iconSrc} alt={iconAlt} />

        {/* icon top=40, title top=120 => 40 + 60 + 20 */}
        <InfoTitle className="mt-[20px] w-[279px]">
          {title}
        </InfoTitle>

        {/* title->text gap 10, text width 368 */}
        <InfoText className="mt-[10px] w-[368px] max-w-full">
          {text}
        </InfoText>
      </div>

      {/* LAPTOP/DESKTOP */}
      <div
        className="
          hidden lg:flex items-start
          gap-[20px] xl:gap-[24px] 2xl:gap-[30px]
          w-[340px] xl:w-[380px] 2xl:w-[418px]
        "
      >
        <InfoIcon src={iconSrc} alt={iconAlt} />

        <div className="min-w-0">
          <InfoTitle className="w-[230px] xl:w-[260px] 2xl:w-[279px]">
            {title}
          </InfoTitle>

          {/* 288px реально працює (і на 1500+, і на 1536+) */}
          <InfoText
            className="
              mt-[20px]
              w-[240px] xl:w-[272px] min-[1500px]:w-[288px] 2xl:w-[288px]
              max-w-none
            "
          >
            {text}
          </InfoText>
        </div>
      </div>
    </article>
  );
}