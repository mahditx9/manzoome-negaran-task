import { Safari } from "@/app/assets/images";
import { CreateFomInput } from "@/components/shared/CreateFomInput";
import Image from "next/image";

export function PreFooter({ className }) {
  return (
    <section className=" relative overflow-hidden mt-36 min-h-screen w-full">
      <div className=" relative bottom-0 w-[80%] min-h-screen mx-auto h-full rounded overflow-hidden bg-dark-primary">
        <div className="h-full w-full relative p-12">
          <div className="flex-center flex-col gap-3.5 w-[40%] mx-auto">
            <span className="body-normal text-yellow-primary inline-block">
              همین الان شروع کنید
            </span>
            <h2 className="h2-bold text-white text-nowrap">
              با یک کلیک به سادگی فرم خود را بسازی
            </h2>
            <p className="paragraph-normal text-white">
              برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
              وارد پنل <br /> کاربری خود شوید و بعد میتوانید به راحتی فرم خود را
              بسازید
            </p>
            <button className="bg-white rounded text-dark-primary text-center px-2 py-1.5">
              همین حالا شروع کنید
            </button>
          </div>
          {/* cover */}
          <div className="absolute top-[377px] w-[985px] h-[652px] left-[105px]">
            <Image src={Safari} alt="safari-image" className="object-cover" />
          </div>
          <CreateFomInput className="absolute z-30 w-[460px] top-[771px] left-[360px] shadow-shadow-dark-200" />
        </div>
      </div>
    </section>
  );
}
