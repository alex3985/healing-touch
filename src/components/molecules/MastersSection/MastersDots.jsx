import MasterDot from "@/components/atoms/MastersSection/MasterDot";

export default function MastersDots({ activeIndex, totalGroups, onDotClick }) {
  return (
    <div className="flex gap-[20px] flex-wrap justify-center">
      {Array.from({ length: totalGroups }).map((_, i) => (
        <button key={i} onClick={() => onDotClick(i)} type="button">
          <MasterDot active={i === activeIndex} />
        </button>
      ))}
    </div>
  );
}