export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`
        font-manrope text-[#703938] font-normal leading-[130%]
        whitespace-nowrap
        ${className}
      `}
    >
      {children}
    </h2>
  );
}