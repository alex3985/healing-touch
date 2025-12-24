export default function MastersDescription({ children, className = "" }) {
    return (
      <p className={`text-[#703938] font-[300] text-[20px] leading-[130%] font-manrope ${className}`}>
        {children}
      </p>
    );
  }