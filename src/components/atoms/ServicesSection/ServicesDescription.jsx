export default function ServicesDescription({ children, className = "" }) {
  return (
    <p
      className={`
        font-manrope
        font-[300] 2xl:font-light
        leading-[130%]
        text-[#703938]
        ${className || "text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px]"}
        w-full
      `}
    >
      {children}
    </p>
  );
}