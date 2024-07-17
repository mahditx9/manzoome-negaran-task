import { IoMdArrowBack, IoMdFolder } from "react-icons/io";

export const FilesContentBox = ({ filesCount = 6, ContentClassName }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex-between text-white gap-1.5 font-bold leading-[16.8px]">
        <div className="flex items-center gap-1">
          <IoMdFolder />
          <span>/</span>
          <span className=" text-white/50">پوشه تست</span>
          <span>/</span>
          <span>فایل ها</span>
        </div>
        <IoMdArrowBack />
      </div>
      <div
        className={`grid grid-cols-3 gap-5 place-content-center place-items-center ${ContentClassName}`}
      >
        {Array.from({ length: filesCount }, (_, i) => (
          <button
            className="flex-between text-dark-primary flex-col px-3.5 py-1.5 w-full focus:!bg-yellow-primary cursor-pointer transition-all ease-in duration-200 rounded bg-white font-bold h-[95px]"
            key={i + 1}
          >
            <IoMdFolder className="text-4xl" />
            <span className="text-nowrap">پوشه تست</span>
          </button>
        ))}
      </div>
    </div>
  );
};
