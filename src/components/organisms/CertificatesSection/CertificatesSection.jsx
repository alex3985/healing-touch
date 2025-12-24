import { useEffect, useMemo, useState } from "react";

import CertificatesBigLogo from "@/components/atoms/CertificatesSection/CertificatesBigLogo";
import CertificatesTitle from "@/components/atoms/CertificatesSection/CertificatesTitle";
import CertificatesText from "@/components/atoms/CertificatesSection/CertificatesText";
import CertificatesButton from "@/components/atoms/CertificatesSection/CertificatesButton";
import CertificatesContent from "@/components/molecules/CertificatesSection/CertificatesContent";
import Container from "@/components/atoms/Layout/Container";

export default function CertificatesSection() {
  const BASE_W = 1920;
  const BASE_H = 400;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calc = () => {
      // масштабуємо desktop-layout тільки по ширині вьюпорта
      const vw = window.innerWidth || BASE_W;
      const s = Math.min(1, vw / BASE_W);
      setScale(s);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const scaledHeight = useMemo(() => BASE_H * scale, [scale]);

  return (
    <section id="certificates" className="w-full bg-[#C08984] flex justify-center">
      {/* ===== MOBILE/TABLET (твій 430x410) ===== */}
      <div className="lg:hidden w-full">
        <Container className="px-[30px]">
          <div className="mx-auto w-full max-w-[368px] pt-[40px] pb-[59.5px]">
            {/* logo 366x75 opacity 0.6 */}
            <CertificatesBigLogo className="w-[366px] h-[75.5238px] opacity-60" />

            {/* block title+text gap 20 (top 156 приблизно) */}
            <div className="mt-[40px]">
              <CertificatesContent />
            </div>
          </div>
        </Container>
      </div>

      {/* ===== DESKTOP/LAPTOP: завжди ОДИН ряд, тільки scale від 1920x400 ===== */}
      <div
        className="hidden lg:flex w-full justify-center overflow-hidden"
        style={{ height: `${scaledHeight}px` }}
      >
        <div
          style={{
            width: `${BASE_W}px`,
            height: `${BASE_H}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {/* 1920x400 layout, але тепер gap = 146 між блоками */}
          <div className="relative w-[1920px] h-[400px]">
            <div className="flex items-start gap-[146px]">
              {/* TEXT BLOCK (ліва частина) */}
              <div className="ml-[240px] mt-[92px] w-[680px] flex flex-col">
                <CertificatesTitle className="text-[50px]">
                  Подарункові сертифікати
                </CertificatesTitle>

                <CertificatesText className="text-[25px] font-[200]">
                  У нашій студії можна придбати подарункові сертифікати як онлайн,
                  так і офлайн на обох локаціях.
                </CertificatesText>

                <div className="mt-[40px]">
                  <form action="https://cbox.mobi/go/healing-touch?" target="_blank">
                    <CertificatesButton className="w-[219px] h-[60px]">
                      Записатися
                    </CertificatesButton>
                  </form>
                </div>
              </div>

              {/* LOGO BLOCK (права частина, в тому ж ряду) */}
              <div className="mt-[124px]">
                <CertificatesBigLogo className="w-[801px] h-[165px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}