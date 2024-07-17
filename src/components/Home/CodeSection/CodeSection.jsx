import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import TrafficLightButtons from "@/components/TrafficLightButtons/TrafficLightButtons";
import Image from "next/image";
import EdgeLightBg from "@/app/assets/images/EdgeLightBg.png";
import NotesMinimalistic from "@/app/assets/icons/NotesMinimalistic.svg";
import { EdgeLayout } from "@/components/UI/EdgeLayout";
import { formCode } from "@/constants/data";
import Button from "@/components/Button/Button";

const CodeSection = ({ className }) => {
  return (
    <section className={`mt-36 ${className}`}>
      <div className="w-[80%] relative mx-auto  flex items-center justify-center flex-col gap-3.5">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="body-normal">فرم را در سایت خود استفاده کنید</span>
          <h2 className="h2-bold text-center text-wrap max-w-[70%] text-dark-primary">
            راه اندازی فرم در وبسایت خود بدون دردسر{" "}
          </h2>
          <p className="text-[16px] font-normal leading-[36px] tracking-[0.18px] text-center text-wrap">
            بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای
            آن را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر شما
            ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
            می‌شود.
          </p>
        </div>
        <EdgeLayout
          src={EdgeLightBg}
          className="w-full"
          width={790}
          height={287}
          imgClass="mx-auto"
        />
        <EdgeLayout
          src={EdgeLightBg}
          className="w-[80%] mx-auto  flex items-end justify-end"
          width={559}
          height={203}
        />
        <PixCard className="mx-auto absolute bottom-24 space-y-3" />
      </div>
    </section>
  );
};

const PixCard = ({ className }) => {
  return (
    <div className={`bg-white-primary-100 rounded p-3 w-[616px] ${className}`}>
      <div className="flex flex-row-reverse w-full justify-between">
        <TrafficLightButtons />
        <div className="bg-[#3777FD] w-fit text-center rounded px-3 py-1 text-white">
          VS Code
        </div>
        <div className=" "></div>
      </div>
      <div className=" bg-gray-100 p-4  flex flex-col items-center justify-between rounded">
        <CodeSnippet code={formCode} />
        <Button className="flex-center gap-2 bg-dark-primary !px-3 !py-2 text-white">
          <span className="inline-block text-[12px] font-medium leading-[21px]">
            کپی کردن
          </span>
          <Image
            src={NotesMinimalistic}
            alt="notes-minimalistic-icon"
            className="object-cover"
          />
        </Button>
      </div>
    </div>
  );
};

export default CodeSection;
