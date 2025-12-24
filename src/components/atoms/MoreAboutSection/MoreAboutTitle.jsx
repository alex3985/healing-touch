export default function MoreAboutTitle({ children, className = "" }) {
  return (
    <h2
      className={`
        font-manrope text-[#703938] leading-[130%] font-[400]
        ${className}
      `}
    >
      {children}
    </h2>
  );
}