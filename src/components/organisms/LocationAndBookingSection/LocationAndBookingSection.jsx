import SectionTitle from "@/components/atoms/LocationAndBookingSection/SectionTitle";
import SocialIcon from "@/components/atoms/LocationAndBookingSection/SocialIcon";

import LocationMapBlock from "@/components/molecules/LocationAndBookingSection/LocationMapBlock";
import ContactInfoBlock from "@/components/molecules/LocationAndBookingSection/ContactInfoBlock";
import PhoneInfoBlock from "@/components/molecules/LocationAndBookingSection/PhoneInfoBlock";

import instaIcon from "@/assets/image/LocationAndBooking-image/icon-inst.png";

export default function LocationAndBookingSection() {
  return (
    <section id="contacts" className="w-full bg-white overflow-hidden">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-[30px] sm:px-[30px] lg:px-[40px]
          2xl:px-0
        "
      >
        {/* TITLE aligns to map left edge */}
        <div className="pt-[37.5px] lg:pt-[40px]">
          <div className="w-full max-w-[1441px] mx-auto">
            <SectionTitle>Наші локації</SectionTitle>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-[20px] lg:mt-[40px]">
          <div className="w-full max-w-[1441px] mx-auto">
            <LocationMapBlock />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-[40px] pb-[49.4px] lg:pb-[60px]">
          <div className="w-full max-w-[1441px] mx-auto">
            {/* centered pack, but left-aligned inside */}
            <div className="mx-auto w-fit max-w-full">
              <div
                className="
                  grid grid-cols-1 gap-[20px]
                  justify-items-start

                  /* ✅ 3 columns ONLY when реально влазить */
                  min-[1400px]:grid-cols-[max-content_max-content_max-content]
                  min-[1400px]:gap-x-[100px]
                  min-[1400px]:gap-y-0
                "
              >
                <ContactInfoBlock />
                <PhoneInfoBlock />

                <div className="flex items-start gap-[10px] min-w-0">
                  <SocialIcon
                    icon={instaIcon}
                    link="https://www.instagram.com/massage__uzhgorod/?igsh=dHN6Mmt4czJnZmJ3#"
                  />
                  <p className="text-[16px] lg:text-[18px] text-[#703938] leading-[130%] break-words">
                    Приєднуйтесь до нас
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}