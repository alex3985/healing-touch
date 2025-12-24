export default function MastersHeaderButton({ children }) {
    return (
      <button
        className="
          w-[219px]
          h-[60px]
          rounded-[15px]
          bg-[#F3D9D8]
          backdrop-blur-[40px]
          flex items-center justify-center
          text-[#703938]
          text-[16px]
          font-[550]
          font-manrope
        "
      >
        {children}
      </button>
    );
  }