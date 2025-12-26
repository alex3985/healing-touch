import InfoBackground from "@/components/atoms/InfoSection/InfoBackground";
import InfoCard from "@/components/molecules/InfoSection/InfoCard";
import Container from "@/components/atoms/Layout/Container";

export default function PartnersSection() {
  return (
    <section
      id="partners"
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
              title='Партнери'
              text="Наші партнери ->"
            />
            <InfoCard
              iconSrc={"/IMG_1421.JPG"}
              iconAlt="Smile Icon"
              title='Автомагазин "JVM Auto"'
              text="Підбір та замовлення автозапчастин для вашого авто,аксесуари та автохімія."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}