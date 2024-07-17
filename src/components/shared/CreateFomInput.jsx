import { EditNotes } from "@/app/assets/icons";
import Image from "next/image";

export function CreateFomInput({ className }) {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] p-3  rounded  gap-5 bg-white  ${className}`}
    >
      <div className="flex items-center bg-white rounded-full border border-gray-300 p-2 w-full">
        <Image
          src={EditNotes}
          alt="edit-notes-icon"
          className="text-gray-400 mx-2"
        />
        <input
          type="text"
          placeholder="نام پروژه خود را وارد کنید..."
          className="outline-none  px-4 text-gray-600"
        />
      </div>
      <button className="bg-gray-700 text-white rounded-full px-6 py-2 text-nowrap">
        ساخت پروژه
      </button>
    </div>
  );
}
