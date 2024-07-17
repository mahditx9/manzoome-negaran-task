"use client";
import { IoMdArrowBack, IoMdFolder, IoMdMore } from "react-icons/io";
import TrafficLightButtons from "@/components/TrafficLightButtons/TrafficLightButtons";
import { EdgeLayout } from "@/components/UI/EdgeLayout";
import { EdgeLightBg } from "@/app/assets/images";
import { DesertBox } from "@/components/shared/DesertBox";
import {
  FilesContentBox,
  FormsContentBox,
  PagesContentBox,
} from "./ContentsBox";
import { useState } from "react";

export function CloudContent({ className }) {
  const [activeForms, setActiveForms] = useState([]);
  const [activeTab, setActiveTab] = useState(1); // status --> 1 - 2 - 3
  return (
    <div
      className={`!bg-dark-primary relative w-full min-h-screen rounded ${className}`}
    >
      <div className="absolute -left-[376px] top-[32px]">
        <EdgeLayout
          src={EdgeLightBg}
          className=""
          height={287}
          width={790}
          imgClass="opacity-[10%]"
        />
      </div>
      <div className="absolute -left-[407px] top-[321.5px] rotate-[3.5deg]">
        <EdgeLayout
          src={EdgeLightBg}
          className=""
          height={287}
          width={790}
          imgClass="opacity-[10%]"
        />
      </div>
      {/* R */}
      <div className="absolute w-[512px] h-[379px] top-[31px] left-[515px]  ">
        <div className="w-full h-full  flex p-6 flex-col gap-6">
          <div className="flex-center border border-yellow-primary rounded text-yellow-primary  w-[76px] h-[76px] bg-dark-primary/50">
            <IoMdFolder className="w-[40px] h-[40px]" />
          </div>
          <span className="paragraph-normal leading-[24px] text-yellow-primary">
            مدیریت فایل
          </span>
          <h3 className="h3-bold text-white w-[390px] text-wrap">
            فضای ذخیره سازی خود را مدیریت کنید
          </h3>
          <p className="paragraph-normal text-[#979797] w-[390px] text-wrap">
            شما میتوانید با استفاده از ابزار مدیریت فایل فری فرم همه فایل های
            مورد نیاز پروژه خود را ذخیره کنید و از آنها استفاده کنید.
          </p>
        </div>
      </div>
      {/* L */}
      <div className="absolute w-[505px] h-[430px]  top-[67px] left-[83px] pr-[177px] pb-[74px] ">
        <div className="h-[356px] w-[328px] relative bg-white-primary-100 rounded-[8px] p-4">
          <div className="flex flex-row-reverse w-full justify-between">
            <TrafficLightButtons />
            <div className="bg-[#3777FD] w-fit text-center rounded px-3 py-1 text-white">
              VS Code
            </div>
            <div className="relative "></div>
          </div>
          {/* BODY */}
          <main className="flex flex-col items-end justify-center h-full relative  ">
            <div className="bg-white flex-between  w-full rotate-90 absolute -left-[127px] top-[127px] rounded shadow-dark-300 gap-[10px] px-4 pb-2 overflow-hidden">
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
              content={<FilesContentBox />}
            />
          </main>
        </div>
      </div>
    </div>
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
