export default function ServiceCardTitle({ children, className = "" }) {
  return (
    <h3
      className={`
        text-[#703938]
        font-[400]
        leading-[130%]
        font-manrope
        text-[20px] 2xl:text-[25px]
        ${className}
      `}
    >
      {children}
    </h3>
  );
}