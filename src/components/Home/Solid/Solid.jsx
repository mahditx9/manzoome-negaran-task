import {
  BookRow,
  BookRow2,
  BookRow3,
  BookRow4,
  BookRow5,
  QuestionMark,
} from "@/app/assets/icons";
import Image from "next/image";

export const Solid = ({ className }) => {
  return (
    <section className={`grid grid-cols-[auto_1fr] gap-2 ${className}`}>
      <div className="p-4 bg-white rounded">
        <div className="grid grid-cols-2">
          <div className="place-content-center border-gray-100 border rounded-tr-[15px] p-6 ">
            <Image
              src={BookRow3}
              alt="question-mark-icon"
              className="w-[16.67px] h-[16.67px]"
            />
          </div>

          <div className="place-content-center bg-[#354150] p-6 rounded">
            <Image
              src={QuestionMark}
              alt="question-mark-icon"
              className="group-hover:bg-[#FAF603] w-[16.67px] h-[16.67px]"
            />
          </div>
          <div className="place-content-center border-gray-100 border p-6 ">
            <Image
              src={BookRow2}
              alt="question-mark-icon"
              className="w-[16.67px] h-[16.67px]"
            />
          </div>
          <div className="place-content-center border-gray-100 border p-6 ">
            <Image
              src={BookRow3}
              alt="question-mark-icon"
              className="w-[16.67px] h-[16.67px]"
            />
          </div>
          <div className="place-content-center border-gray-100 border p-6 rounded-br-[15px]">
            <Image
              src={BookRow4}
              alt="question-mark-icon"
              className="w-[16.67px] h-[16.67px]"
            />
          </div>
          <div className="place-content-center border-gray-100 border rounded-bl-[15px] p-6 ">
            <Image
              src={BookRow5}
              alt="question-mark-icon"
              className="w-[16.67px] h-[16.67px]"
            />
          </div>
        </div>
      </div>
      <div className="py-5 flex-1 px-3 bg-white rounded ">
        <div className="border border-dotted border-[#979797] text-center p-6 rounded w-3/4 mx-auto">
          <span className="text-[#979797] font-normal text-[10px] leading-[24px] text-center">
            فرم خود را بسازید
          </span>
        </div>
      </div>
    </section>
  );
};
