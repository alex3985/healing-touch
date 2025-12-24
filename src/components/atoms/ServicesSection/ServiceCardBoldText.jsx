export default function ServiceCardBoldText({ children, className = "" }) {
  return (
    <p
      className={`
        text-[#703938]
        font-[550]
        leading-[130%]
        font-manrope]
        mt-[10px]
        text-[16px] 2xl:text-[18px]
        ${className}
      `}
    >
      {children}
    </p>
  );
}