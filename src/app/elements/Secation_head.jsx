export default function Secation_head({ content }) {
  return (
    <div className="container w-[85%] sm:w-full shadow-md ">
      <div className="relative flex items-center w-full h-11 bg-white">
        <span className="absolute h-full w-[6px] bg-gray-700"></span>
        <p className="ml-7 text-xl -tracking-wide text-gray-500 uppercase">
          {content}
        </p>
      </div>
    </div>
  );
}
