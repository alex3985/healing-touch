export default function CertificatesButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        bg-[#F3D9D8] rounded-[15px] backdrop-blur-[40px]
        flex items-center justify-center
        text-[#703938] font-manrope font-[550] text-[16px] leading-[130%]
        ${className}
      `}
    >
      {children}
    </button>
  );
}