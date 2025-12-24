import flower from "@/assets/image/Hero-Image/Flower.png";

export default function FlowerBlock({ className = "" }) {
  return (
    <div
      className={`
        absolute top-0
        flex items-center justify-center
        bg-[#C08984] backdrop-blur-[40px]
        w-[98.0328px] h-[60px] rounded-[15px]
        lg:w-[130px] lg:h-[80px] lg:rounded-[20px]
        z-[1]
        ${className}
      `}
    >
      <img
        src={flower}
        alt="Flower icon"
        className="
          absolute object-contain
          w-[22px] h-[22px]
          top-[19px] left-[60.3px]
          lg:w-[30px] lg:h-[30px]
          lg:top-[25px] lg:left-[80px]
        "
      />
    </div>
  );
}