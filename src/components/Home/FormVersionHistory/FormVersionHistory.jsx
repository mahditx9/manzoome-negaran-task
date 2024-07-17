"use client";
import Button from "@/components/Button/Button";
import React, { useState, version } from "react";
import { IoMdArrowDown, IoMdEye, IoMdPaper } from "react-icons/io";

export const FormVersionHistory = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const versions = [
    {
      date: "1401/01/01 | 14:30",
      version: "1.6",
      changes: [
        { type: "اصلاح", description: "فیلد (نام) به (نام و نام خانوادگی)" },
        { type: "حذف", description: "فیلد (نام و نام خانوادگی)" },
        { type: "اضافه کردن", description: "فیلد (نام)" },
      ],
    },
    {
      date: "1401/01/01 | 14:30",
      version: "1.5",
      changes: [
        { type: "اصلاح", description: "فیلد (نام) به (نام و نام خانوادگی)" },
        { type: "حذف", description: "فیلد (نام و نام خانوادگی)" },
        { type: "اضافه کردن", description: "فیلد (نام)" },
      ],
    },
    {
      date: "1401/01/01 | 14:30",
      version: "1.4",
      changes: [
        { type: "اصلاح", description: "فیلد (نام) به (نام و نام خانوادگی)" },
        { type: "حذف", description: "فیلد (نام و نام خانوادگی)" },
        { type: "اضافه کردن", description: "فیلد (نام)" },
      ],
    },
    {
      date: "1401/01/01 | 14:30",
      version: "1.3",
      changes: [
        { type: "اصلاح", description: "فیلد (نام) به (نام و نام خانوادگی)" },
        { type: "حذف", description: "فیلد (نام و نام خانوادگی)" },
        { type: "اضافه کردن", description: "فیلد (نام)" },
      ],
    },
    {
      date: "1401/01/01 | 14:30",
      version: "1.2",
      changes: [
        { type: "اصلاح", description: "فیلد (نام) به (نام و نام خانوادگی)" },
        { type: "حذف", description: "فیلد (نام و نام خانوادگی)" },
        { type: "اضافه کردن", description: "فیلد (نام)" },
      ],
    },
  ];
  const currentVersion = "1.6";
  return (
    <div className="p-8 bg-[#F7F8FA] min-h-screen rounded w-full">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex-between relative">
          <h2 className="body-bold text-dark-primary mb-4 text-right">
            تاریخچه فرم
          </h2>
          <div className="bg-white-primary-200 px-3 py-2 border rounded overflow-hidden w-[20%]">
            <select
              className="ring-0 border-none outline-none bg-transparent text-dark-primary regular-12 leading-[28px] w-full"
              defaultValue="فرم مشاوره"
            >
              <option>فرم مشاوره</option>
            </select>
          </div>
          <Button className="bg-dark-primary py-2 px-4 rounded flex items-center gap-2.5 group absolute left-48 top-4">
            <span className="body-normal text-white inline-block">
              کلیک کنید
            </span>
            <IoMdPaper className="h-4 w-4 text-yellow-primary group-hover:rotate-[15deg] transition-all ease-in duration-200" />
          </Button>
        </div>
        <div className="">
          <div className="flex items-center gap-10 px-6 py-3">
            <div className="">
              <span className="inline-block regular-12 text-dark-primary/40">
                ورژن
              </span>
            </div>
            <div className="">
              <span className="inline-block regular-12 text-dark-primary/40">
                تاریخ ایجاد
              </span>
            </div>
          </div>
          <div className="overflow-hidden bg-white ">
            <ul className="divide-y divide-gray-200 w-full space-y-3">
              {versions.map((version, index) => (
                <DropDownMenuItem
                  key={index}
                  version={version}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  id={index + 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDownMenuItem = ({ version, expanded, setExpanded, id }) => {
  const isExistInExpanded = expanded.includes(id);

  return (
    <li
      className={`${
        isExistInExpanded
          ? "bg-white-primary-200 rounded-t overflow-hidden"
          : ""
      }`}
    >
      <div
        className="border rounded border-dark-primary/10  px-4 py-2.5 flex-between w-full  cursor-pointer bg-white"
        onClick={() =>
          setExpanded(
            isExistInExpanded
              ? expanded?.filter((i) => i !== id)
              : [...expanded, id]
          )
        }
      >
        <div className="flex items-center gap-3 w-[40%]">
          <div className="flex items-center justify-center px-3">
            <div className="bg-dark-primary/10 rounded py-[5px] px-[15px]">
              {version?.version}
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-block text-[14px] font-semibold leading-[19.1px]">
              {version?.date}
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center  gap-4 w-[30%]">
          <IoMdArrowDown
            className={`w-6 h-6 text-dark-primary ${
              isExistInExpanded ? "rotate-[90deg]" : ""
            } transition-all ease-linear duration-300`}
          />
          <span className="inline-block text-gray-primary/50">|</span>
          <IoMdEye className="w-6 h-6 text-dark-primary" />
          <IoMdPaper className="w-6 h-6 text-dark-primary" />
        </div>
      </div>
      {isExistInExpanded && (
        <div className="bg-white-primary-200 py-3 pr-9 transition-all ease-linear duration-300 ">
          <div className="text-dark-primary border-b border-dark-primary/10 py-4">
            تاریخچه ورژن {version?.version}
          </div>
          <ul className="flex flex-col gap-3.5 py-4 px-2">
            {version?.changes?.map((item, i) => (
              <VersionChangesItem key={i + 1} item={item} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const VersionChangesItem = ({ item }) => {
  let versionTypeStyle;
  switch (item?.type) {
    case "اصلاح":
      versionTypeStyle = "bg-dark-primary/10 text-dark-primary";
      break;
    case "حذف":
      versionTypeStyle = "bg-red-100 text-red-600";
      break;
    case "اضافه کردن":
      versionTypeStyle = "bg-green-100 text-green-600";
      break;

    default:
      break;
  }
  return (
    <li className="flex items-center gap-10">
      <div className={`w-[15%]`}>
        <p
          className={`inline-block body-bold flex-center  rounded px-3 py-1.5 ${versionTypeStyle}`}
        >
          {item?.type}
        </p>
      </div>

      <div className="">
        <p className="text-dark-primary/100 paragraph-normal">
          {item?.description}
        </p>
      </div>
    </li>
  );
};
