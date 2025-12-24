export default function MastersTitle({ children, className = "" }) {
    return (
      <h2 className={`text-[#703938] font-[400] text-[50px] leading-[130%] font-manrope ${className}`}>
        {children}
      </h2>
    );
  }