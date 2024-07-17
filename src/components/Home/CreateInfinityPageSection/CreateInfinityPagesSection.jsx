"use client";
import { EdgeBg, EdgeLightBg, Logo } from "@/app/assets/images";
import { EdgeLayout } from "@/components/UI/EdgeLayout";
import Image from "next/image";
import { IoMdBulb, IoMdFolder } from "react-icons/io";
import {
  FilesContentBox,
  FormsContentBox,
  PagesContentBox,
} from "../CloudSection/ContentsBox";
import { DesertBox } from "@/components/shared/DesertBox";
import { useState } from "react";
import { cloudTabButtonsData } from "@/constants/data";

export function CreateInfinityPagesSection({ className }) {
  const [activeForms, setActiveForms] = useState([]);
  const [activeTab, setActiveTab] = useState(1); // status --> 1 - 2 - 3
  return (
    <section className=" relative overflow-hidden mt-36 h-[934px] w-full">
      <div className=" relative bottom-0 w-[80%] h-full mx-auto flex-center flex-col gap-5 overflow-hidden bg-gray-primary/10">
        {/* layouts */}
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
        {/* layouts */}
        {/* content */}
        <div className="absolute w-[480px] h-[405px] top-[47px] left-[590px]  ">
          <div className="w-full h-full  flex p-6 flex-col gap-6">
            <div className="flex-center border border-yellow-primary rounded text-yellow-primary  w-[76px] h-[76px] bg-dark-primary/50">
              <IoMdFolder className="w-[40px] h-[40px]" />
            </div>
            <h3 className="h3-bold text-white w-[390px] text-wrap">
              فضای ذخیره سازی خود را مدیریت کنید
            </h3>
            <p className="paragraph-normal text-[#979797] w-[390px] text-wrap">
              شما میتوانید با استفاده از ابزار مدیریت فایل فری فرم همه فایل های
              مورد نیاز پروژه خود را ذخیره کنید و از آنها استفاده کنید.
            </p>
          </div>
        </div>
        {/* Logo */}
        <div
          className="flex items-center gap-4 absolute top-[493px] left-[725px] py-[15px] px-[30px] h-fit w-fit rounded  shadow-dark-400 border-[0.5px] border-[linear-gradient(96.68deg,
        rgba(53, 65, 80, 0.3) 0%, rgba(53, 65, 80, 0) 100%)] bg-[linear-gradient(96.68deg, #FFFFFF 0%, rgba(255, 255, 255, 0)
        100%)]"
        >
          <div className="flex-center flex-col gap-0.5">
            <h4 className="h4-bold text-[#0E0B3D]">Freeform</h4>
            <span className="inline-block small-normal text-[#6C6F93]">
              Freeform.ir
            </span>
          </div>
          <Image src={Logo} alt="logo-img" className="object-cover" />
        </div>
        {/* Logo */}
        {/* Left Content */}

        <div className=" absolute w-[932px] h-[746px] top-[47px] -left-[273px] pr-28">
          <div className="w-[640px] h-[99px] rounded-t-[20px] bg-white shadow-dark-300/08 flex items-center gap-5 px-5">
            <span className="inline-block bold-16 text-dark-primary">
              طراحی
            </span>
            <span className="inline-block bold-16 text-gray-primary">
              تنطیمات
            </span>
          </div>
          <div className="w-[846px] h-[430px] rounded-t-[20px] bg-white mt-10 relative  shadow-dark-300/60 pt-6 pb-5 px-8">
            <div className="w-[786px] h-[370px] rounded border-2 border-dashed">
              <div className="w-full pt-[10px] pr-[13px] pb-[8px] flex gap-2.5 rounded-t rounded-r bg-dark-primary">
                <div className="p-[4px] bg-light-primary rounded border-[0.5px] border-[#E9E9E9] flex-between  text-gray-primary">
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="p-[4px] bg-light-primary rounded border-[0.5px] border-[#E9E9E9] flex-between  text-gray-primary">
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="p-[4px] bg-light-primary rounded border-[0.5px] border-[#E9E9E9] flex-between  text-gray-primary">
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px] bg-dark-primary text-yellow-primary">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="p-[4px] bg-light-primary rounded border-[0.5px] border-[#E9E9E9] flex-between  text-gray-primary">
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px] text-yellow-primary bg-dark-primary">
                    <div className="w-[20px] h-[20px] " />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                  <div className="p-[8px] rounded-[10px]">
                    <IoMdBulb className="w-[20px] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* width: 375px; height: 481px; top: 369px; left: 502px; gap: 0px;
          opacity: 0px; angle: -90 deg; */}
          {/* desert box */}
          <main className="flex flex-col items-end justify-center  absolute w-[375px] h-[481px] top-[280px] left-[330px]">
            <div className="bg-white flex-between flex-row-reverse  w-[296px] rotate-90 absolute -left-[126px] top-[128px] rounded shadow shadow-dark-300 gap-[10px] px-4 pb-2 overflow-hidden">
              {cloudTabButtons.map((ctb) => (
                <button
                  key={ctb.tabNumber}
                  className={`p-[6px] shadow-shadow-dark-50 !text-[15px] SideMenuCore shadow-dark-200 text-center flex-1 rounded ${
                    activeTab === ctb.tabNumber
                      ? "text-white bg-dark-primary ogoStyle relative"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveTab(ctb.tabNumber);
                  }}
                >
                  {ctb.title}
                </button>
              ))}
            </div>
            {/* content */}
            <DesertBox
              className="top-[2px] left-[41px]"
              activeTab={activeTab}
              tabNumber={1}
              title="صفحات"
              content={
                <PagesContentBox
                  filesCount={1}
                  contentTitle="صفحه نخست"
                  activeForms={activeForms}
                  setActiveForms={setActiveForms}
                />
              }
            />
            <DesertBox
              className="top-[2px] left-[41px]"
              activeTab={activeTab}
              tabNumber={2}
              title="فرم ها"
              content={
                <FormsContentBox
                  filesCount={1}
                  contentTitle="صفحه نخست"
                  activeForms={activeForms}
                  setActiveForms={setActiveForms}
                />
              }
            />
            <DesertBox
              className="top-[2px] left-[41px]"
              activeTab={activeTab}
              tabNumber={3}
              title="فایل ها"
              content={
                <FilesContentBox
                  filesCount={8}
                  ContentClassName="grid-cols-4"
                />
              }
            />
          </main>
          {/* desert box */}
        </div>
        {/* Left Content */}
        {/* content */}
      </div>
    </section>
  );
}

const cloudTabButtons = [
  {
    tabNumber: 1,
    title: "صفحات",
  },
  {
    tabNumber: 2,
    title: "فرم ها",
  },
  {
    tabNumber: 3,
    title: "فایل ها",
  },
];
