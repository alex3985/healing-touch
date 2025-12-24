export default function CertificatesTitle({ children, className = "" }) {
  return (
    <h2
      className={`
        font-manrope font-normal leading-[130%] text-white
        ${className}
      `}
    >
      {children}
    </h2>
  );
}