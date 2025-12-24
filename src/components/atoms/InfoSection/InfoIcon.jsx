export default function InfoIcon({ src, alt }) {
  return (
    <div
      className="
        w-[60px] h-[60px] rounded-[9.8px]
        bg-white flex items-center justify-center
        2xl:w-[100px] 2xl:h-[100px] 2xl:rounded-[15px]
      "
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-[28px] h-[28px] object-contain 2xl:w-[47px] 2xl:h-[47px]"
      />
    </div>
  );
}