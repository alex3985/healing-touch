import InfoBackground from "@/components/atoms/InfoSection/InfoBackground";
import InfoCard from "@/components/molecules/InfoSection/InfoCard";
import icon1 from "@/assets/image/Info-Image/icon-1.png";
import icon2 from "@/assets/image/Info-Image/icon-2.png";
import icon3 from "@/assets/image/Info-Image/icon-3.png";
import Container from "@/components/atoms/Layout/Container";

export default function InfoSection() {
  return (
    <section
      id="info"
      className="
        relative w-full bg-[#F8F0E5] overflow-hidden
        2xl:h-[400px]
      "
    >
      <InfoBackground />

      <Container className="relative z-[2] w-full">
        {/* MOBILE: top/bottom 40px
           DESKTOP: центр + wrap
           2XL: рівно 400px, верхній відступ 77px, gap між картками 90px */}
        <div
          className="
            w-full
            px-[30px] py-[40px]

            lg:px-[40px] lg:py-[60px]

            2xl:px-[60px]
            2xl:py-0 2xl:h-[400px]
          "
        >
          <div
            className="
              mx-auto w-full

              /* MOBILE column centered */
              max-w-[368px]
              flex flex-col items-center
              gap-[20px]

              /* LAPTOP: row + WRAP so never overlap */
              lg:max-w-none
              lg:flex-row lg:flex-wrap
              lg:justify-center lg:items-start
              lg:gap-x-[40px] lg:gap-y-[60px]

              /* 1920+: one row, exact gap 90px, align at top=77 */
              2xl:flex-nowrap
              2xl:pt-[77px]
              2xl:gap-x-[90px] 2xl:gap-y-0
            "
          >
            <InfoCard
              iconSrc={icon1}
              iconAlt="Smile Icon"
              title="Понад 1000 задоволених клієнтів"
              text="більше тисячі людей довірили нам своє здоров’я, самопочуття і відновлення — багато з них стали нашими постійними клієнтами."
            />
            <InfoCard
              iconSrc={icon2}
              iconAlt="Philosophy Icon"
              title="Індивідуальний підхід як філософія роботи"
              text="кожен клієнт отримує не шаблонну процедуру, а персоналізований масаж з урахуванням фізичного стану, потреб і побажань."
            />
            <InfoCard
              iconSrc={icon3}
              iconAlt="Methods Icon"
              title="Освоєння сучасних методик масажу"
              text="ми постійно оновлюємо знання — в арсеналі студії найновіші техніки, серед яких міофасціальний реліз, IASTM терапія, глибокотканинний, лимфодренажний масаж тощо."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}