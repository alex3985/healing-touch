import arrow2 from "@/assets/image/Masters-Image/arrow2.png";

export default function ModalContactButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        gap-[15px]
        whitespace-nowrap
        select-none
      "
    >
      <span
        className="
          text-[#703938]
          font-[300]
          text-[16px]
          leading-[130%]
          underline
          underline-offset-[3px]
          decoration-[0.5px]
          whitespace-nowrap
        "
      >
        Записатися
      </span>

      <img
        src={arrow2}
        alt="arrow"
        className="w-[11px] h-[11px] translate-y-[1px]"
      />
    </button>
  );
}