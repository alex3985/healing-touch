export default function ServiceButton({ children, className = "" }) {
  return (
    <button
      className={`
        w-full
        h-[60px]
        rounded-[15px]
        flex items-center justify-center
        bg-[#F3D9D8]
        backdrop-blur-[40px]
        text-[#703938]
        font-manrope
        font-[550] 2xl:font-[500]
        text-[16px] 2xl:text-[18px]
        ${className}
      `}
    >
      {children}
    </button>
  );
}