export default function GreetingText({ children }) {
  return (
    <div
      className="
        text-[#703938] font-manrope font-light leading-[130%]
        flex flex-col gap-[20px]

        text-[16px] lg:text-[18px]
         lg:normal-case
      "
    >
      {children}
    </div>
  );
}