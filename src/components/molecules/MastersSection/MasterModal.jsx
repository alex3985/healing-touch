import ModalContactButton from "@/components/atoms/MastersSection/ModalContactButton";
import MasterExperienceIcon from "@/components/atoms/MastersSection/MasterExperienceIcon";

export default function MasterModal({ master, onClose, variant = "mobile" }) {
  const photo = new URL(
    `/src/assets/image/Masters-Image/${master.photo}`,
    import.meta.url
  ).href;

  const icon = new URL(
    `/src/assets/image/Masters-Image/${master.icon}`,
    import.meta.url
  ).href;

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ✅ MOBILE modal (your 368×704 spec baseline)
  if (variant === "mobile") {
    return (
      <div
        onClick={handleBgClick}
        className="fixed inset-0 bg-[#C08984B2] flex items-start justify-center z-50 overflow-y-auto"
      >
        <div className="w-[368px] min-h-[704px] bg-white rounded-[50px] relative mt-[40px] mb-[40px] overflow-hidden">
          {/* Photo */}
          <div className="pt-[15px] px-[15px] flex justify-center">
            <img
              src={photo}
              alt={master.name}
              className="w-[338px] h-[350px] rounded-[40px] object-cover"
              style={{ backdropFilter: "blur(33.11px)" }}
            />
          </div>

          {/* Content */}
          <div className="px-[16px] pt-[20px]">
            <h3 className="text-[20px] font-[400] text-[#703938] leading-[130%] mb-[13px]">
              {master.name}
            </h3>

            <div className="flex items-start gap-[10px] mb-[20px]">
              <MasterExperienceIcon src={icon} />
              <p className="text-[16px] leading-[130%] text-[#703938]">
                <span className="font-[550] mr-[4px]">Досвід роботи</span>
                <span className="font-[550]">{master.experience}</span>
                <span className="font-[300] block mt-[4px]">{master.bioShort}</span>
              </p>
            </div>

            <p className="text-[14px] font-[300] text-[#703938] leading-[130%] mb-[20px]">
              {master.bioLong.split(".")[0] + "."}
              <br /><br />
              {master.bioLong.split(".").slice(1).join(".").trim()}
            </p>

            <div className="mb-[40.5px]">
              <form action="https://cbox.mobi/go/healing-touch?" target="_blank">
                <ModalContactButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ DESKTOP modal (your original)
  return (
    <div
      onClick={handleBgClick}
      className="fixed inset-0 bg-[#C08984B2] flex items-center justify-center z-50"
    >
      <div className="w-[706px] h-[440px] bg-white rounded-[50px] flex overflow-hidden relative">
        <div className="pl-[15px] pt-[15px] pb-[15px]">
          <img
            src={photo}
            alt={master.name}
            className="w-[307px] h-[410px] rounded-[40px] object-cover"
          />
        </div>

        <div className="flex flex-col ml-[30px] mt-[30px] w-[320px]">
          <h3 className="text-[25px] font-[400] text-[#703938] leading-[130%]">
            {master.name}
          </h3>

          <div className="flex items-start mt-[15px] gap-[15px]">
            <MasterExperienceIcon src={icon} />
            <div className="w-[250px]">
              <p className="text-[18px] leading-[130%] text-[#703938]">
                <span className="font-[550] mr-[4px]">Досвід роботи</span>
                <span className="font-[550]">{master.experience}</span>
              </p>

              <p className="text-[18px] font-[300] text-[#703938] leading-[130%] mt-[4px]">
                {master.bioShort}
              </p>
            </div>
          </div>

          <p className="w-[318px] text-[16px] font-[300] text-[#703938] leading-[130%] mt-[30px]">
            {master.bioLong.split(".")[0] + "."}
            <br /><br />
            {master.bioLong.split(".").slice(1).join(".").trim()}
          </p>
        </div>

        <div
          className="absolute"
          style={{ top: "374px", left: "353px", right: "196px", bottom: "45px" }}
        >
          <form action="https://cbox.mobi/go/healing-touch?" target="_blank">
            <ModalContactButton />
          </form>
        </div>
      </div>
    </div>
  );
}