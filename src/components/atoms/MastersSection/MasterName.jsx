export default function MasterName({ children, className = "" }) {
    return (
      <h3 className={`
        text-[25px]
        font-[400]
        text-[#703938]
        leading-[130%]
        ${className}
      `}>
        {children}
      </h3>
    );
  }