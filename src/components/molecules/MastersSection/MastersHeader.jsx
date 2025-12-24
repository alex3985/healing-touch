import MastersTitle from "@/components/atoms/MastersSection/MastersTitle";
import MastersSubtitleImage from "@/components/atoms/MastersSection/MastersSubtitleImage";
import MastersDescription from "@/components/atoms/MastersSection/MastersDescription";
import MastersHeaderButton from "@/components/atoms/MastersSection/MastersHeaderButton";

import mastersLogo from "@/assets/image/Services-Image/Logo.png";

export default function MastersHeader() {
  return (
    <div className="w-full">
      {/* ✅ EXACT 1920×900 — НЕ ЧІПАТИ */}
      <div className="hidden min-[1920px]:block">
        <div className="w-[1440px] flex justify-between items-start">
          <div className="flex flex-col mt-[79px]">
            <div className="w-[318px] h-[50px]">
              <MastersTitle>Майстри</MastersTitle>
            </div>
            <div className="mt-[10px] w-[252px] h-[52px] ml-[169px]">
              <MastersSubtitleImage src={mastersLogo} alt="Healing Touch logo" />
            </div>
          </div>

          <div className="flex items-center mt-[110px] gap-[50px]">
            <div className="w-[478px] h-[60px]">
              <MastersDescription>
                Наші майстри — серце студії, енергія, що дарує вам гармонію, красу та легкість.
              </MastersDescription>
            </div>

            <form
              action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
            >
              <MastersHeaderButton>Записатися</MastersHeaderButton>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE (<640px) */}
      <div className="min-[640px]:hidden">
        <div className="w-full max-w-[368px] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-0">
            <MastersTitle className="text-[25px] whitespace-nowrap">
              Майстри
            </MastersTitle>

            <div className="w-[131.0879px] h-[27.0499px] ml-[87.9px] mt-[5px]">
              <MastersSubtitleImage src={mastersLogo} alt="Healing Touch logo" />
            </div>
          </div>

          <MastersDescription className="text-[16px]">
            Наші майстри — серце студії, енергія, що дарує вам гармонію, красу та легкість.
          </MastersDescription>
        </div>
      </div>

      {/* ✅ TABLET/LAPTOP (640–1919) */}
      <div className="hidden min-[640px]:block min-[1920px]:hidden">
        <div className="flex flex-col min-[1060px]:flex-row min-[1060px]:items-start min-[1060px]:justify-between gap-[20px]">
          {/* LEFT */}
          <div className="flex flex-col">
            <MastersTitle className="text-[30px] min-[1060px]:text-[40px] min-[1400px]:text-[50px] whitespace-nowrap">
              Майстри
            </MastersTitle>

            <div
              className="
                mt-[10px]
                w-[170px] h-[35px]
                ml-[110px]
                min-[1060px]:w-[200px] min-[1060px]:h-[41px] min-[1060px]:ml-[135px]
                min-[1400px]:w-[252px] min-[1400px]:h-[52px] min-[1400px]:ml-[169px]
              "
            >
              <MastersSubtitleImage src={mastersLogo} alt="Healing Touch logo" />
            </div>
          </div>

          {/* RIGHT (без кнопки — бо кнопка одна після карток) */}
          <div className="min-[1060px]:pt-[18px]">
            <MastersDescription className="text-[16px] min-[1060px]:text-[20px] max-w-[520px]">
              Наші майстри — серце студії, енергія, що дарує вам гармонію, красу та легкість.
            </MastersDescription>
          </div>
        </div>
      </div>
    </div>
  );
}