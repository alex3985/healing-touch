import ContactIcon from "@/components/atoms/LocationAndBookingSection/ContactIcon";
import PhoneIcon from "@/assets/image/LocationAndBooking-image/icon-2.png";

export default function PhoneInfoBlock() {
  return (
    <div className="flex items-start gap-[10px] min-w-0">
      <ContactIcon icon={PhoneIcon} />

      <p className="text-[16px] lg:text-[18px] text-[#703938] leading-[130%] break-words">
        0 (68) 591 15 04 — адміністратор <br />
        0 (96) 568 93 89 — власник Владислава
      </p>
    </div>
  );
}