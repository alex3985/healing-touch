export default function ServicesSubtitleImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`
        object-contain
        w-[131.0879px] h-[27.0499px]
        2xl:w-[252px] 2xl:h-[52px]
        ${className}
      `}
    />
  );
}