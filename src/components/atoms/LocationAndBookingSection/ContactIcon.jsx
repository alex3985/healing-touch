export default function ContactIcon({ icon }) {
  return (
    <img
      src={icon}
      alt="icon"
      className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-contain"
    />
  );
}