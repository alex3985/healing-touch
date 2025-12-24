import CertificatesTitle from "@/components/atoms/CertificatesSection/CertificatesTitle";
import CertificatesText from "@/components/atoms/CertificatesSection/CertificatesText";
import CertificatesButton from "@/components/atoms/CertificatesSection/CertificatesButton";

export default function CertificatesContent() {
  return (
    <div className="w-full max-w-[368px]">
      {/* Title + text block: gap 20 */}
      <div className="flex flex-col gap-[20px]">
        <CertificatesTitle className="text-[25px] w-[302px]">
          Подарункові сертифікати
        </CertificatesTitle>

        <CertificatesText className="text-[18px] w-full">
          У нашій студії можна придбати подарункові сертифікати як онлайн,
          так і офлайн на обох локаціях.
        </CertificatesText>
      </div>

      {/* 40px до кнопки */}
      <div className="mt-[40px]">
        <form action="https://cbox.mobi/go/healing-touch?" target="_blank">
          <CertificatesButton className="w-full h-[60px]">
            Записатися
          </CertificatesButton>
        </form>
      </div>
    </div>
  );
}