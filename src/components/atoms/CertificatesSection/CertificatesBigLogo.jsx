import BigLogo from "@/assets/image/Certificates-Image/BigLogo.png";

export default function CertificatesBigLogo({ className = "" }) {
  return (
    <img
      src={BigLogo}
      alt="Certificates Logo"
      loading="lazy"
      className={className}
    />
  );
}