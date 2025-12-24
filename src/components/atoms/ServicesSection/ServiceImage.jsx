export default function ServiceImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}