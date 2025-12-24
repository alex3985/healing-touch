export default function MoreAboutText({ children, className = "" }) {
  return (
    <p
      className={`
        font-manrope text-[#703938] whitespace-pre-line
        font-[300] leading-[130%]
        text-[16px] sm:text-[17px] lg:text-[18px]
        ${className}
      `}
    >
      {children}
    </p>
  );
}