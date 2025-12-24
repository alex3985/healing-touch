export default function GreetingTitle({ children }) {
  return (
    <h2
      className="
        font-manrope font-normal leading-[130%] text-[#703938]
        whitespace-nowrap

        text-[25px] lg:text-[40px] 2xl:text-[50px]
      "
    >
      {children}
    </h2>
  );
}