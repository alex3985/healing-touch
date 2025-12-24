export default function HeroButton({ className = "" }) {
  return (
    <form
      className="z-[10] w-full h-full"
      action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
      target="_blank"
      rel="noreferrer"
    >
      <button
        className={`
          w-full h-full flex items-center justify-center
          bg-[#F3D9D8] text-[#703938]
          font-manrope font-[550] 
          text-[14.28px] lg:text-[18px]
          leading-[130%]
          rounded-[15px] lg:rounded-[20px]
          backdrop-blur-[40px]
          ${className}
        `}
      >
        Записатися
      </button>
    </form>
  );
}