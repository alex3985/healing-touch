import MasterImage from "@/components/atoms/MastersSection/MasterImage";
import MasterName from "@/components/atoms/MastersSection/MasterName";
import MasterExperienceIcon from "@/components/atoms/MastersSection/MasterExperienceIcon";

export default function MasterCard({ master, onOpen, variant = "desktop" }) {
  const photo = new URL(
    `/src/assets/image/Masters-Image/${master.photo}`,
    import.meta.url
  ).href;

  const icon = new URL(
    `/src/assets/image/Masters-Image/${master.icon}`,
    import.meta.url
  ).href;

  if (variant === "mobile") {
    return (
      <div className="w-[338px] flex flex-col items-start shrink-0">
        <MasterImage
          src={photo}
          alt={master.name}
          onOpen={onOpen}
          variant="mobile"
        />

        <div className="mt-[20px] w-[333px]">
          <div className="mb-[10px]">
            <MasterName className="text-[20px]">{master.name}</MasterName>
          </div>

          <div className="flex items-start gap-[10px]">
            <MasterExperienceIcon src={icon} />
            <p className="text-[16px] leading-[130%] text-[#703938]">
              <span className="font-[550]">Досвід роботи</span>{" "}
              <span className="font-[550]">{master.experience}</span>
              <span className="font-[300] block mt-[4px]">{master.bioShort}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // desktop/default (1920 untouched visually)
  return (
    <div className="w-[336px] flex flex-col items-start">
      <MasterImage src={photo} alt={master.name} onOpen={onOpen} />

      <div className="mt-[30px]">
        <MasterName>{master.name}</MasterName>
      </div>

      <div className="mt-[15px]">
        <div className="flex items-start gap-[15px]">
          <MasterExperienceIcon src={icon} />
          <p className="text-[18px] leading-[130%] text-[#703938] mt-[2px]">
            <span className="font-[550]">Досвід роботи</span>{" "}
            <span className="font-[550]">{master.experience}</span>
            <span className="font-[300] block mt-[4px]">{master.bioShort}</span>
          </p>
        </div>
      </div>
    </div>
  );
}