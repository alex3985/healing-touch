import ServicesTitle from "@/components/atoms/ServicesSection/ServicesTitle";
import ServicesSubtitleImage from "@/components/atoms/ServicesSection/ServicesSubtitleImage";
import ServicesDescription from "@/components/atoms/ServicesSection/ServicesDescription";
import servicesLogo from "@/assets/image/Services-Image/Logo.png";

export default function ServicesHeader() {
  return (
    <div className="w-full">
      {/* ===== MOBILE (до md) ===== */}
      <div className="md:hidden">
        <div className="pt-[40px] px-[20px] sm:px-[30px] flex flex-col items-center">
          {/* title + logo block */}
          <div className="w-full max-w-[219px] h-auto flex flex-col">
            <ServicesTitle className="uppercase text-[25px]">Наші послуги</ServicesTitle>

            {/* logo with ml 87.9 like макет */}
            <div className="ml-[87.9px] mt-[2px]">
              <ServicesSubtitleImage src={servicesLogo} alt="Healing Touch logo" />
            </div>
          </div>

          {/* description */}
          <div className="mt-[20px] w-full max-w-[368px]">
            <ServicesDescription className="text-[16px]">
              У Healing Touch ми поєднуємо класичні та новітні техніки масажу, щоб
              відновити баланс тіла, розуму й енергії. Кожна процедура проводиться
              індивідуально, з урахуванням ваших потреб і стану здоров'я.
            </ServicesDescription>
          </div>
        </div>
      </div>

      {/* ===== TABLET (md до lg) ===== */}
      <div className="hidden md:block lg:hidden">
        <div className="pt-[50px] px-[40px] flex flex-col items-center">
          {/* title + logo block */}
          <div className="w-full max-w-[350px] h-auto flex flex-col">
            <ServicesTitle className="uppercase text-[30px]">Наші послуги</ServicesTitle>

            {/* logo */}
            <div className="ml-[100px] mt-[5px]">
              <ServicesSubtitleImage src={servicesLogo} alt="Healing Touch logo" />
            </div>
          </div>

          {/* description */}
          <div className="mt-[25px] w-full max-w-[380px]">
            <ServicesDescription className="text-[17px]">
              У Healing Touch ми поєднуємо класичні та новітні техніки масажу, щоб
              відновити баланс тіла, розуму й енергії. Кожна процедура проводиться
              індивідуально, з урахуванням ваших потреб і стану здоров'я.
            </ServicesDescription>
          </div>
        </div>
      </div>

      {/* ===== LAPTOP (lg до 2xl) ===== */}
      <div className="hidden lg:block 2xl:hidden">
        <div className="pt-[60px] px-[50px]">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[30px]">
            {/* LEFT BLOCK */}
            <div className="w-full lg:w-auto h-auto flex flex-col items-center lg:items-start">
              <ServicesTitle className="text-[35px]">Наші послуги</ServicesTitle>

              <div className="mt-[8px] ml-0 lg:ml-[140px]">
                <ServicesSubtitleImage
                  src={servicesLogo}
                  alt="Healing Touch logo"
                  className="w-[200px] h-auto"
                />
              </div>
            </div>

            {/* RIGHT BLOCK */}
            <div className="w-full lg:w-auto lg:max-w-[400px] mt-0 lg:mt-[20px] text-center lg:text-left">
              <ServicesDescription className="text-[18px]">
                У Healing Touch ми поєднуємо класичні та новітні техніки масажу, щоб
                відновити баланс тіла, розуму й енергії. Кожна процедура проводиться
                індивідуально, з урахуванням ваших потреб і стану здоров'я.
              </ServicesDescription>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP (2xl - 1920) ===== */}
      <div className="hidden 2xl:block">
        <div className="w-full flex justify-between items-start">
          {/* LEFT BLOCK */}
          <div
            className="
              w-[421px]
              h-[97px]
              mt-[79px]
              mr-[87px]
              mb-[20px]
              flex flex-col
            "
          >
            <div className="w-[318px] h-[50px]">
              <ServicesTitle className="text-[50px]">Наші послуги</ServicesTitle>
            </div>

            <div className="mt-[10px] w-[252px] h-[52px] ml-[169px]">
              <ServicesSubtitleImage
                src={servicesLogo}
                alt="Healing Touch logo"
                className="w-[252px] h-[52px]"
              />
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div
            className="
              w-[945px]
              h-[60px]
              mt-[110px]
              mb-[39px]
              mr-[240px]
            "
          >
            <ServicesDescription className="w-[945px] text-[20px] font-light">
              У Healing Touch ми поєднуємо класичні та новітні техніки масажу, щоб
              відновити баланс тіла, розуму й енергії. Кожна процедура проводиться
              індивідуально, з урахуванням ваших потреб і стану здоров'я.
            </ServicesDescription>
          </div>
        </div>
      </div>
    </div>
  );
}