export default function GreetingImage({ src, alt, variant = "main" }) {
    const styles =
      variant === "main"
        ? "w-[418px] h-[598px] rounded-[100px] backdrop-blur-[40px]"
        : "w-[346px] h-[495px] rounded-[80px] border-[10px] border-white backdrop-blur-[33px]";
  
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${styles}`}
        style={{ opacity: 1 }}
      />
    );
  }