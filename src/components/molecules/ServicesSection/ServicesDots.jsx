import ServiceDot from "@/components/atoms/ServicesSection/ServiceDot";

export default function ServicesDots({ activeIndex, totalGroups, onDotClick }) {
  return (
    <div className="w-full flex justify-center px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] 2xl:px-[30px]">
      {/* ✅ wrap: якщо не влазить — піде в 2 рядки */}
      <div
        className="
          flex flex-wrap justify-center
          gap-x-[15px] gap-y-[15px]
          sm:gap-x-[20px] sm:gap-y-[20px]
          md:gap-x-[25px]
          lg:gap-x-[30px]
          2xl:gap-x-[40px]
          w-full max-w-full
        "
      >
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button 
            key={i} 
            onClick={() => onDotClick(i)} 
            className="shrink-0"
          >
            <ServiceDot active={i === activeIndex} />
          </button>
        ))}
      </div>
    </div>
  );
}