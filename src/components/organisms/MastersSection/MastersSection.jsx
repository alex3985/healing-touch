import { useCallback, useEffect, useRef, useState } from "react";
import MastersHeader from "@/components/molecules/MastersSection/MastersHeader";
import MasterCard from "@/components/molecules/MastersSection/MasterCard";
import MasterModal from "@/components/molecules/MastersSection/MasterModal";
import MastersDots from "@/components/molecules/MastersSection/MastersDots";
import MastersHeaderButton from "@/components/atoms/MastersSection/MastersHeaderButton";

import masters from "@/data/masters.json";

export default function MastersSection() {
  const [selected, setSelected] = useState(null);

  const total = masters.length;

  /**
   * modes:
   * - desktop1920: exact old layout (НЕ ЧІПАТИ)
   * - swipe: horizontal swipe (phones + narrow widths)
   * - grid2: 2x2 (NO 3+1)
   * - grid4: 4 in row
   */
  const [mode, setMode] = useState("swipe");
  const [wrapperMax, setWrapperMax] = useState(368); // aligns Header + Cards left edge

  // ===== SWIPE REFS/STATE (dots = masters count, always per-card) =====
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ===== RESPONSIVE MODE CALC =====
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      // ✅ exact desktop
      if (w >= 1920) {
        setMode("desktop1920");
        return;
      }

      // padding same as sections: 30 on small, 40 on lg
      const pad = w >= 1024 ? 80 : 60; // left+right total
      const available = Math.min(1440, Math.max(0, w - pad));

      const cardW = 336;
      const gap = w >= 1024 ? 30 : 20;

      const need4 = cardW * 4 + gap * 3; // 1434 with gap30
      const need2 = cardW * 2 + gap * 1; // 692/702

      if (available >= need4) {
        setMode("grid4");
        setWrapperMax(need4); // keep header aligned to first card
        return;
      }

      if (available >= need2) {
        setMode("grid2");
        setWrapperMax(need2);
        return;
      }

      // fallback: swipe
      setMode("swipe");
      setWrapperMax(368); // phone spec block width
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ===== SWIPE ACTIVE DOT CALC =====
  const setActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const first = itemRefs.current[0];
    if (!first) return;

    const gap = window.innerWidth >= 1024 ? 30 : 20;
    const step = first.offsetWidth + gap;

    const idx = Math.round(el.scrollLeft / step);
    const safe = Math.max(0, Math.min(total - 1, idx));
    setActiveIndex(safe);
  }, [total]);

  const onScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(setActiveFromScroll);
  }, [setActiveFromScroll]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onDotClick = useCallback((i) => {
    const node = itemRefs.current[i];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  return (
    <section id="masters" className="relative w-full bg-white">
      {/* ✅ EXACT 1920×900 — НЕ ЧІПАТИ */}
      <div className="hidden min-[1920px]:block">
        <div className="relative w-[1440px] h-[991px] mx-auto">
          <MastersHeader />

          <div className="grid grid-cols-4 gap-[30px] mt-[60px]">
            {masters.map((master) => (
              <MasterCard
                key={master.id}
                master={master}
                onOpen={() => setSelected(master)}
              />
            ))}
          </div>

          {selected && (
            <MasterModal master={selected} onClose={() => setSelected(null)} />
          )}
        </div>
      </div>

      {/* ✅ <1920 RESPONSIVE */}
      <div className="min-[1920px]:hidden">
        <div className="mx-auto w-full max-w-[1440px] px-[30px] lg:px-[40px] pt-[40px] lg:pt-[60px] pb-[60px]">
          {/* ✅ ONE shared wrapper => header left edge == first card left edge */}
          <div
            className="mx-auto w-full max-w-full"
            style={{ maxWidth: `${wrapperMax}px` }}
          >
            <MastersHeader />

            {/* ===== GRID (only 2x2 or 4-in-row) ===== */}
            {(mode === "grid2" || mode === "grid4") && (
              <>
                <div className="mt-[40px] lg:mt-[60px]">
                  <div
                    className={`
                      grid
                      gap-[20px] lg:gap-[30px]
                      justify-items-start
                      ${mode === "grid4" ? "grid-cols-4" : "grid-cols-2"}
                    `}
                  >
                    {masters.map((master) => (
                      <MasterCard
                        key={master.id}
                        master={master}
                        onOpen={() => setSelected(master)}
                      />
                    ))}
                  </div>
                </div>

                {/* ✅ Кнопка ПІД КАРТКАМИ: ховаємо від 1553px (бо там вона в хедері) */}
                <div className="mt-[30px] flex justify-center min-[1553px]:hidden">
                  <form
                    action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                    target="_blank"
                  >
                    <MastersHeaderButton>Записатися</MastersHeaderButton>
                  </form>
                </div>
              </>
            )}

            {/* ===== SWIPE (phones + narrow widths) ===== */}
            {mode === "swipe" && (
              <>
                <div className="mt-[40px] w-full">
                  <div
                    ref={scrollerRef}
                    onScroll={onScroll}
                    className="
                      overflow-x-auto overflow-y-visible
                      flex
                      snap-x snap-mandatory
                      scroll-smooth
                      gap-[20px] lg:gap-[30px]
                      [-ms-overflow-style:none] [scrollbar-width:none]
                      [&::-webkit-scrollbar]:hidden
                      -mx-[30px] lg:-mx-[40px]
                      px-[30px] lg:px-[40px]
                    "
                  >
                    {masters.map((master, i) => (
                      <div
                        key={master.id}
                        ref={(el) => {
                          if (el) itemRefs.current[i] = el;
                        }}
                        className="shrink-0 snap-start"
                      >
                        <MasterCard
                          master={master}
                          onOpen={() => setSelected(master)}
                          variant="mobile"
                        />
                      </div>
                    ))}

                    {/* ✅ RIGHT spacer = same as padding (fix last card right gap) */}
                    <div className="shrink-0 w-[30px] lg:w-[40px]" />
                  </div>

                  {/* dots: always per master */}
                  <div className="mt-[30px] flex justify-center">
                    <MastersDots
                      activeIndex={activeIndex}
                      totalGroups={total}
                      onDotClick={onDotClick}
                    />
                  </div>

                  {/* button */}
                  <div className="mt-[39.5px] flex justify-center w-full">
                    <form
                      action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                      target="_blank"
                      className="w-full max-w-[368px]"
                    >
                      <button
                        className="
                          w-full
                          h-[60px]
                          rounded-[15px]
                          bg-[#F3D9D8]
                          backdrop-blur-[40px]
                          flex items-center justify-center
                          text-[#703938]
                          text-[16px]
                          font-[550]
                          font-manrope
                        "
                      >
                        Записатися
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>

          {selected && (
            <MasterModal
              master={selected}
              onClose={() => setSelected(null)}
              variant={mode === "swipe" ? "mobile" : "desktop"}
            />
          )}
        </div>
      </div>
    </section>
  );
}