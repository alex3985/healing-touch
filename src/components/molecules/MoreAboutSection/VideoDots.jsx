import VideoDot from "@/components/atoms/MoreAboutSection/VideoDot";

export default function VideoDots({ activeIndex, totalGroups, onDotClick }) {
  return (
    <div className="flex gap-[40px]">
      {Array.from({ length: totalGroups }).map((_, i) => (
        <button key={i} onClick={() => onDotClick(i)} type="button">
          <VideoDot active={i === activeIndex} />
        </button>
      ))}
    </div>
  );
}