import { EdgeBg, EdgeLightBg } from "@/app/assets/images";
import { CreateFomInput } from "@/components/shared/CreateFomInput";
import { EdgeLayout } from "@/components/UI/EdgeLayout";

export function LionSection({ className }) {
  return (
    <section
      className={` relative overflow-hidden mt-36 h-[554px] w-full ${className}`}
    >
      <div className=" relative bottom-0 w-[80%] h-full mx-auto  gap-5 overflow-hidden bg-dark-primary rounded">
        <div className="absolute -right-[407px] bottom-0 z-20 rotate-[180deg]">
          <EdgeLayout
            src={EdgeBg}
            className=""
            height={287}
            width={790}
            imgClass=""
          />
        </div>
        <div className="absolute -right-[300px] -bottom-10 z-10 rotate-[180deg]">
          <EdgeLayout
            src={EdgeLightBg}
            className=""
            height={220}
            width={750}
            imgClass=""
          />
        </div>
        <div className="absolute -left-[407px] bottom-0 z-20 rotate-[180deg]">
          <EdgeLayout
            src={EdgeBg}
            className=""
            height={287}
            width={790}
            imgClass=""
          />
        </div>
        <div className="absolute -left-[300px] -bottom-10 z-10 rotate-[180deg]">
          <EdgeLayout
            src={EdgeLightBg}
            className=""
            height={220}
            width={750}
            imgClass=""
          />
        </div>
        <div className="flex-center flex-col gap-3.5 h-fit relative z-30 mt-16">
          <span className="text-yellow-primary body-normal inline-block">
            همین الان شروع کنید
          </span>
          <h2 className="text-white h2-bold">
            با یک کلیک به سادگی فرم خود را بسازی
          </h2>
          <p className="paragraph-normal text-white">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
        </div>
        <CreateFomInput className="absolute z-50 -bottom-1 -translate-x-[65%] w-[45%] mx-auto" />
      </div>
    </section>
  );
}
