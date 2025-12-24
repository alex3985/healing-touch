import MoreAboutTextBlock from "@/components/molecules/MoreAboutSection/MoreAboutTextBlock";
import VideoSlider from "@/components/molecules/MoreAboutSection/VideoSlider";

export default function MoreAboutSection() {
  return (
    <section id="moreabout" className="relative w-full bg-white overflow-x-hidden">
      {/* ✅ PHONE (<640px): vertical layout (title+logo, text, video) */}
      <div className="max-[639px]:block hidden overflow-x-visible">
        <div className="px-[30px] pt-[40px] flex flex-col items-center">
          {/* Title + Logo + Text block - блок по центру, текст зліва */}
          <MoreAboutTextBlock variant="mobile" />

          {/* Video slider: 40px gap after text - відступ 30px зліва, відео обрізаються справа екраном */}
          <div className="mt-[40px] ml-[30px] w-screen">
            <VideoSlider variant="mobile" />
          </div>
        </div>
      </div>

      {/* ✅ TABLET (640–1449): horizontal layout, arrows below */}
      <div className="min-[640px]:max-[1449px]:block hidden">
        <div className="mx-auto w-full max-w-[1440px] px-[30px]">
          <div
            className="
              flex flex-col items-center justify-center
              gap-[26px]
              min-[768px]:gap-[34px]
              py-[40px] min-[768px]:py-[60px]
            "
          >
            <div className="flex items-center justify-center gap-[26px] min-[768px]:gap-[34px] flex-wrap">
              <div className="shrink-0 mx-auto">
                <MoreAboutTextBlock variant="tablet" />
              </div>

              <div className="shrink-0 mx-auto">
                <VideoSlider variant="tablet" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ LAPTOP (1450–1919): horizontal layout, arrows on sides */}
      <div className="min-[1450px]:max-[1919px]:block hidden">
        <div className="mx-auto w-full max-w-[1440px] px-[30px]">
          <div
            className="
              flex items-center justify-center
              gap-[30px]
              min-[1624px]:gap-[44px]
              min-[1024px]:gap-[60px]
              min-[1280px]:gap-[70px]
              py-[40px] min-[768px]:py-[60px]
            "
          >
            <div className="shrink-0 max-w-full overflow-hidden">
              <MoreAboutTextBlock variant="responsive" />
            </div>

            <div className="shrink-0 max-w-full overflow-hidden">
              <VideoSlider variant="laptop" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ EXACT 1920×900 — НЕ ЧІПАЄМО */}
      <div className="hidden min-[1920px]:block">
        <div className="relative w-full h-[900px] bg-white overflow-visible">
          <div className="relative w-[1440px] mx-auto flex">
            <MoreAboutTextBlock variant="desktop1920" />
            <VideoSlider variant="desktop1920" />
          </div>
        </div>
      </div>
    </section>
  );
}