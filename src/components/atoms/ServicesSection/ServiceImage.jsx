export default function ServiceImage({ src, alt, className = "" }) {
  return (
    <img
      src={new URL(src, import.meta.url).href}
      alt={alt}
      loading="lazy"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}