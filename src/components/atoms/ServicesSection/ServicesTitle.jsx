export default function ServicesTitle({ children, className = "" }) {
  return (
    <h2
      className={`
        font-manrope
        font-[400]
        leading-[130%]
        text-[#703938]
        ${className || "text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[50px]"}
      `}
    >
      {children}
    </h2>
  );
}