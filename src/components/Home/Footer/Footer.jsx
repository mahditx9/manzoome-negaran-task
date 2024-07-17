import Image from "next/image";
import { MdLocationCity, MdMail, MdPhone } from "react-icons/md";
import { FooterItem } from "./FooterItem";
import { footerInfo } from ".";
import { HoldingLogo, Logo } from "@/app/assets/icons";

export function Footer({ className }) {
  return (
    <footer className=" relative overflow-hidden mt-36   w-full">
      <div className="w-full relative bottom-0  mx-auto   overflow-hidden border-t border-dark-primary/40">
        <div className="  w-[80%] mx-auto h-full py-14 overflow-hidden flex-center flex-col gap-5  mt-10 relative">
          <Image
            src={Logo}
            alt="logo"
            className="object-cover w-[104px] h-[66px]"
          />
          <p className="paragraph-normal">
            وب سایت شرکت گروه شرکتهای منظومه نگاران به عنوان بخش مرکزی روابط
            عمومی ، ماموریت آشنایی شما عزیزان با شرکتهای تابع واحد انتشارات ؛
            استارت‌آپها و همچنین جذب و آموزش نیروهای متخصص را بر عهده دارد .برای
            مشاهده سایر استارت آپ ها اینجا را کلیک کنید.
          </p>
          <div className="flex-between items-center gap-5 bg-dark-primary/10 rounded px-3 py-2 ">
            {footerInfo.map((f, i) => (
              <FooterItem item={f} key={i + 1} />
            ))}
          </div>
        </div>
        <div className="relative bottom-0 flex-center border-t border-dark-primary/40 py-6 flex-center w-full gap-3">
          <span className="text-[16px] font-normal leading-[27.44px] text-gray-primary inline-block">
            Powered By
          </span>
          <Image src={HoldingLogo} alt="" className="object-cover" />
          <span className="text-[16px] font-normal leading-[27.44px] text-gray-primary inline-block">
            MANZOOMEH
          </span>
        </div>
      </div>
    </footer>
  );
}
