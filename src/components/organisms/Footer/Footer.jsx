// /Users/igarek/healing-touch/src/components/organisms/Footer/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full h-[80px] bg-[#C08984] border-t border-white/40">
      {/* 1920 -> container 1440 => left/right margins = 240 */}
      <div
        className="
          h-full mx-auto w-full max-w-[1440px]
          px-[30px] lg:px-[40px] 2xl:px-0
          flex items-center
        "
      >
        <div className="w-full flex items-center justify-between font-manrope">
          {/* Left text */}
          <p className="text-[14px] text-white leading-[130%] whitespace-nowrap">
            Healing Touch 2025
          </p>

          {/* Right text */}
          <a
            href="#"
            className="relative inline-block text-[14px] text-white leading-[130%] whitespace-nowrap"
          >
            Політика конфіденційності

            <span
              className="absolute left-0 right-0 bottom-[-0.5px] bg-white"
              style={{ height: "0.3px", opacity: 0.7 }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}