export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-4 xs:px-5 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}