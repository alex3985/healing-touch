export default function MoreAboutSubtitleImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-contain ${className}`}
    />
  );
}