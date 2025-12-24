export default function CertificatesText({ children, className = "" }) {
  return (
    <p
      className={`
        font-manrope font-light leading-[130%] text-white
        ${className}
      `}
    >
      {children}
    </p>
  );
}