export default function ModalLongDescription({ children }) {
    return (
      <p
        className="
          w-[318px]
          text-[16px]
          font-[300]
          text-[#703938]
          leading-[130%]
          mt-[30px]
        "
      >
        {children}
      </p>
    );
  }