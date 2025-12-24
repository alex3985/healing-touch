export default function SocialIcon({ href, src, alt, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`object-contain w-[25px] h-[25px] cursor-pointer ${className}`}
      />
    </a>
  );
}