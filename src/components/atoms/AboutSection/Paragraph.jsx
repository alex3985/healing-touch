export default function Paragraph({ children, className = "" }) {
  return (
    <p
      className={`
        font-manrope text-[#703938] font-light leading-[130%]
        text-[14px] sm:text-[16px] lg:text-[18px]
        ${className}
      `}
    >
      {children}
    </p>
  );
}