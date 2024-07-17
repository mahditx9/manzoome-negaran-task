import Image from "next/image";
import { BusinessTemplatesCard } from "./BusinessTemplatesCard";
import EdgeLightBg from "@/app/assets/images/EdgeLightBg.png";
import { businessTemplatesData } from "@/constants/data";
import { EdgeLayout } from "@/components/UI/EdgeLayout";

export const BusinessTemplatesSection = ({ className }) => {
  return (
    <section className=" relative overflow-hidden min-h-[896px] h-fit mt-36 ">
      <div className="absolute top-10 -left-[386px] -z-10 ">
        <EdgeLayout
          src={EdgeLightBg}
          className="relative"
          height={431}
          width={1112}
        />
        <EdgeLayout
          src={EdgeLightBg}
          className="flex items-end justify-end mt-12"
          height={231}
          width={642}
          imgClass="-rotate-[5deg]"
        />
      </div>

      <div className="relative bottom-0  overflow-hidden w-[80%] mx-auto  flex items-center justify-center flex-col gap-5">
        <div className="flex flex-col items-start  w-full relative">
          <span className="body-small text-dark-primary">
            قالب های تخصصی فری فرم
          </span>
          <h2 className="h2-bold self-start w-[50%] text-dark-primary text-wrap">
            قالب های تخصصی و متنوع برای کسب و کارها
          </h2>
          <button className="bg-dark-primary rounded p-2 text-center text-white absolute left-0 bottom-0">
            همه مقالات
          </button>
        </div>
        <div className="flex items-center gap-5 w-full">
          {businessTemplatesData.map((business, index) => (
            <BusinessTemplatesCard
              className="flex-1 flex-grow"
              key={index + 1}
              {...business}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
