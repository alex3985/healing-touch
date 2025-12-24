import ContactIcon from "@/components/atoms/LocationAndBookingSection/ContactIcon";
import LocationIcon from "@/assets/image/LocationAndBooking-image/icon-1.png";

export default function ContactInfoBlock() {
  return (
    <div className="flex items-start gap-[10px] min-w-0">
      <ContactIcon icon={LocationIcon} />

      <p className="text-[16px] lg:text-[18px] text-[#703938] leading-[130%] break-words">
        Центр — Івана Чендея 7а <br />
        Новий Район — Легоцького 80 ЖК Parkland
      </p>
    </div>
  );
}