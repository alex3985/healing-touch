export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        font-manrope font-[550] 
        flex items-center justify-center whitespace-nowrap
        w-[219px] h-[60px] rounded-[15px]
        px-[40px] py-[21px]
        text-[16px] leading-[130%]
        bg-[#F3D9D8] text-[#703938] backdrop-blur-[40px]
        ${className}
      `}
    >
      {children}
    </button>
  );
}