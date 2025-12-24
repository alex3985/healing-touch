export default function ServiceCardText({ children, className = "" }) {
  return (
    <p
      className={`
        text-[#703938]
        font-[300]
        leading-[130%]
        font-manrope
        text-[16px] 2xl:text-[18px]
        ${className}
      `}
    >
      {children}
    </p>
  );
}