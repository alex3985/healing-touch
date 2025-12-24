export default function InfoText({ children, className = "" }) {
  return (
    <p
      className={`
        font-manrope font-light leading-[130%] text-[#703938]
        text-[16px] 2xl:text-[18px]
        ${className}
      `}
    >
      {children}
    </p>
  );
}