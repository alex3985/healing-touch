export default function MasterDot({ active = false }) {
  return (
    <div
      className={`
        w-[8px] 
        h-[8px] 
        rounded-full
        ${active ? "bg-[#C08984]" : "bg-[#F3D9D8]"}
      `}
    />
  );
}

