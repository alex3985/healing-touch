export default function InfoTitle({ children, className = "" }) {
  return (
    <h3
      className={`
        font-manrope font-[550] leading-[130%] text-[#703938]
        text-[20px] 2xl:text-[30px]
        ${className}
      `}
    >
      {children}
    </h3>
  );
}