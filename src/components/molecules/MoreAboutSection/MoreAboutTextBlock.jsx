import MoreAboutTitle from "@/components/atoms/MoreAboutSection/MoreAboutTitle";
import MoreAboutSubtitleImage from "@/components/atoms/MoreAboutSection/MoreAboutSubtitleImage";
import MoreAboutText from "@/components/atoms/MoreAboutSection/MoreAboutText";
import Logo from "@/assets/image/MoreAbout-Image/Logo.png";

export default function MoreAboutTextBlock({ variant = "responsive" }) {
  const textValue = `Healing Touch — це простір, створений для відновлення, гармонії та турботи про ваше тіло. Ми поєднуємо високу якість послуг, індивідуальний підхід і щирий сервіс, щоб кожен клієнт відчував справжній комфорт та результат уже після першого візиту.

У нашій студії панує атмосфера затишку та спокою, де можна повністю розслабитися й довірити себе професіоналам. Ми поєднуємо класичні техніки масажу з новітніми апаратними методиками, щоб забезпечити максимально ефективне відновлення тіла та підтримку його природної краси.

У процедурах ми використовуємо преміальну косметику для обгортань, скрабування та SPA-ритуалів, спрямованих на покращення тонусу шкіри, зменшення проявів целюліту та усунення набряків.

У Healing Touch кожна деталь продумана, щоб ви могли відчути гармонію, легкість і натхнення — доторк до справжнього балансу.`;

  /* ===================== EXACT 1920 ===================== */
  if (variant === "desktop1920") {
    return (
      <div className="w-[641px] h-[537px] mt-[182px] flex flex-col gap-[20px]">
        <div className="w-[421px] h-[50px]">
          <MoreAboutTitle className="text-[50px]">
            Більше про нас
          </MoreAboutTitle>
        </div>

        <div className="w-[252px] h-[52px] ml-[169px]">
          <MoreAboutSubtitleImage src={Logo} alt="Healing Touch Logo" />
        </div>

        <MoreAboutText className="text-[18px]">
          {textValue}
        </MoreAboutText>
      </div>
    );
  }

  /* ===================== MOBILE (430×1261) ===================== */
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-[20px] w-[368px]">
        {/* Title + Logo block: без gap між заголовком і лого */}
        <div className="flex flex-col gap-0">
          <MoreAboutTitle className="text-[25px] whitespace-nowrap leading-[130%]">
            Більше про нас
          </MoreAboutTitle>
          {/* Лого: розраховано для 430px (420px: 87.9px ml, 131.088px×27.05px) */}
          <div className="w-[131.9px] h-[27.2px] ml-[88px]">
            <MoreAboutSubtitleImage src={Logo} alt="Healing Touch Logo" />
          </div>
        </div>

        {/* Text block: width 368px, текст вирівняний зліва (як у Word) */}
        <MoreAboutText className="text-[16px] leading-[130%] text-left">
          {textValue}
        </MoreAboutText>
      </div>
    );
  }

  /* ===================== TABLET (640–1449) ===================== */
  if (variant === "tablet") {
    return (
      <div
        className="
          flex flex-col gap-[20px]
          w-[368px]
          min-[768px]:w-[400px]
        "
      >
        {/* Title + Logo block: без gap між заголовком і лого */}
        <div className="flex flex-col gap-0">
          <MoreAboutTitle
            className="
              whitespace-nowrap
              text-[25px]
              min-[768px]:text-[30px]
            "
          >
            Більше про нас
          </MoreAboutTitle>

          {/* Лого: розраховано для 640px та 768px */}
          <div
            className="
              w-[148.8px] h-[30.7px]
              ml-[100px]
              min-[768px]:w-[155.2px] min-[768px]:h-[32.1px] min-[768px]:ml-[105px]
            "
          >
            <MoreAboutSubtitleImage src={Logo} alt="Healing Touch Logo" />
          </div>
        </div>

        {/* Text: адаптивний для планшета */}
        <MoreAboutText
          className="
            text-[16px]
            min-[768px]:text-[17px]
          "
        >
          {textValue}
        </MoreAboutText>
      </div>
    );
  }

  /* ===================== RESPONSIVE (1450–1919) ===================== */
  return (
    <div
      className="
        flex flex-col gap-[20px]
        w-[400px]
        min-[1033px]:w-[460px]
        min-[1024px]:w-[560px]
        min-[1280px]:w-[600px]
        min-[1624px]:w-[560px]
      "
    >
      {/* ✅ Title + Logo block: без gap між заголовком і лого */}
      <div className="flex flex-col gap-0">
        <MoreAboutTitle
          className="
            whitespace-nowrap
            text-[38px]
            min-[1033px]:text-[44px]
            min-[1280px]:text-[48px]
          "
        >
          Більше про нас
        </MoreAboutTitle>

        {/* ✅ Лого: розраховано для 1450px, 1024px, 1280px, 1536px */}
        <div
          className="
            w-[177.1px] h-[36.5px]
            ml-[120px]
            min-[1024px]:w-[201.3px] min-[1024px]:h-[41.5px] min-[1024px]:ml-[136px]
            min-[1280px]:w-[219.2px] min-[1280px]:h-[45.2px] min-[1280px]:ml-[148px]
            min-[1536px]:w-[234.6px] min-[1536px]:h-[48.4px] min-[1536px]:ml-[158px]
          "
        >
          <MoreAboutSubtitleImage src={Logo} alt="Healing Touch Logo" />
        </div>
      </div>

      {/* ✅ Text */}
      <MoreAboutText
        className="
          text-[17px]
          min-[1033px]:text-[18px]
        "
      >
        {textValue}
      </MoreAboutText>
    </div>
  );
}