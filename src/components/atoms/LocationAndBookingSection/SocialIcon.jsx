export default function SocialIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        alt="social icon"
        className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-contain"
      />
    </a>
  );
}