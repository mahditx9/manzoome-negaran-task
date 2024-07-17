import Image from "next/image";
import Essentional from "./assets/icons/Essentional.svg";
import EdgeBg from "./assets/images/EdgeBg.png";

import CodeSection from "@/components/Home/CodeSection/CodeSection";
import { BusinessTemplatesSection } from "@/components/Home/BusinessSection/BusinessTemplatesSection";
import { CloudManagementSection } from "@/components/Home/CloudSection/CloudManagementSection";
import TrafficLightButtons from "@/components/TrafficLightButtons/TrafficLightButtons";
import { CreateInfinityPagesSection } from "@/components/Home/CreateInfinityPageSection/CreateInfinityPagesSection";
import { CreateFomInput } from "@/components/shared/CreateFomInput";
import { LionSection } from "@/components/Home/LionSection/LionSection";
import { FormVersionHistory } from "@/components/Home/FormVersionHistory/FormVersionHistory";
import { FormVersionHistorySection } from "@/components/Home/FormVersionHistory/FormVersionHistorySection";
import { Faq } from "@/components/Home/FAQ/Faq";
import { ArticlesSection } from "@/components/Home/Articles/ArticlesSection";
import { PreFooter } from "@/components/Home/PreFooter/PreFooter";
import { Footer } from "@/components/Home/Footer";
import { Solid } from "@/components/Home/Solid";

export default function HomePage() {
  return (
    <section>
      <div className="py-[50px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center  gap-[10px]">
          <span className="body-normal">به سادگی فرم بسازید</span>
          <h1 className="h1-bold flex flex-col justify-center gap-[10px] items-center text-wrap w-[742px] text-dark-primary">
            <div className="flex items-center gap-2">
              <span className=" font-bold">با یک کلیک</span>
              <div className="relative bg-[#354150]/10 rounded w-[45px] h-[45px] flex items-center justify-center">
                <Image
                  src={Essentional}
                  alt="Essentional-icon"
                  className="object-contain "
                />
              </div>
              <span className=" font-bold">و به صورت رایگان</span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" font-bold">فرم</span>
              <div className="relative bg-[#354150]/10 rounded w-[45px] h-[45px] flex items-center justify-center">
                <Image
                  src={Essentional}
                  alt="Essentional-icon"
                  className="object-contain "
                />
              </div>
              <span className=" font-bold">خود را بسازید</span>
            </div>
          </h1>
          <p className="text-[16px] font-normal leading-[36px] tracking-[0.18px] text-center">
            برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا
            وارد پنل کاربری خود شوید و بعد میتوانید به راحتی فرم خود را بسازید
          </p>
        </div>
        <div className="relative mt-5 ">
          <CreateFomInput className="absolute  -translate-x-1/3 w-3/5 mx-auto" />

          <div className="">
            <Image
              src={EdgeBg}
              alt="edge-background"
              className="object-cover "
            />
          </div>
          <div className="bg-white-primary-100 rounded-lg p-3 w-3/5 mx-auto absolute -bottom-28 right-[189px]">
            <div className="flex flex-row-reverse w-full justify-between">
              <TrafficLightButtons />
              <h3 className="bg-dark-primary/10 rounded w-fit text-center px-3 py-1.5">
                Freeform.ir
              </h3>
              <div className="relative ">
                <div className="bg-[#354150] text-center flex items-center justify-center text-white absolute w-[153px] rounded h-[48px] top-2 -right-[70px]">
                  <span>بکشید و رها کنید ✨</span>
                </div>
              </div>
            </div>
            <Solid className="mt-10" />
          </div>
        </div>
      </div>
      <CodeSection />
      <BusinessTemplatesSection />
      <CloudManagementSection />
      <CreateInfinityPagesSection />
      <LionSection />
      <FormVersionHistorySection />
      <Faq />
      <ArticlesSection />
      <PreFooter />
      <Footer />
    </section>
  );
}
