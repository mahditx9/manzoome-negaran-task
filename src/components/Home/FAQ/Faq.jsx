"use client";
import { FadeLayer } from "@/app/assets/images";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowBack, IoMdArrowDown } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";

export function Faq({ className }) {
  const [expanded, setExpanded] = useState([]);
  return (
    <section className=" relative overflow-hidden mt-36 min-h-screen w-full">
      <div className=" relative bottom-0 w-[728px] h-full mx-auto flex-center rounded flex-col gap-5 overflow-hidden ">
        <div className="w-full h-full relative  bg-dark-primary/10">
          {/* BG */}

          <div className="absolute w-[328px] h-[802px] top-[0] -left-[15px] -rotate-[0deg]">
            <Image
              src={FadeLayer}
              alt="fade-layer-bg"
              className="object-cover"
            />
          </div>
          {/* BG */}
          <div className="px-20 py-12 flex-center flex-col gap-5">
            <div className="space-y-3 self-start">
              <span className="body-normal inline-block text-dark-primary">
                سوالات متداول
              </span>
              <h3 className="h3-bold text-dark-primary flex flex-col gap-[10px]  text-wrap">
                <div className="flex items-center gap-2">
                  <span className=" font-bold text-nowrap">سوالات متداولی</span>
                  <div className="relative bg-[#354150]/10 rounded w-[45px] h-[45px] flex items-center justify-center">
                    <MdOutlineQuestionMark />
                  </div>
                  <span className=" font-bold text-nowrap">
                    که برای
                    <br />
                  </span>
                </div>
                <div>
                  <span className="text-nowrap">کاربران به وجود آمده است</span>
                </div>
              </h3>
            </div>
            <ul className="overflow-y-scroll scroll-smooth flex flex-col gap-3 w-full scroll">
              {faqData.map((faq, i) => (
                <FaqDropDown
                  expanded={expanded}
                  setExpanded={setExpanded}
                  item={faq}
                  id={i + 1}
                  key={i + 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const FaqDropDown = ({ item, expanded, setExpanded, id }) => {
  const isExistInExpanded = expanded.includes(id);
  console.log(isExistInExpanded);
  console.log(expanded);
  return (
    <li
      onClick={() =>
        setExpanded(
          isExistInExpanded
            ? expanded?.filter((i) => i !== id)
            : [...expanded, id]
        )
      }
      className={`
      shadow-[0_1px_2px_0] shadow-[#71749814] rounded overflow-hidden cursor-pointer transition-all ease-linear duration-300 px-4 py-2.5
      ${
        isExistInExpanded
          ? "bg-dark-primary text-white-primary-200"
          : " bg-white border border-white-primary-200 text-dark-primary "
      }`}
    >
      <div className="flex-between bg-transparent">
        <span className="inline-block faq-title ">{item.title}</span>
        <IoMdArrowDown
          className={`w-6 h-6  ${
            isExistInExpanded ? "rotate-[90deg]" : ""
          } transition-all ease-linear duration-300`}
        />
      </div>
      {isExistInExpanded && (
        <p className="mt-4 mb-10 w-[80%] faq-title !text-[14px] text-white-primary-200">
          {item.description}
        </p>
      )}
    </li>
  );
};

const faqData = [
  {
    title: "سوالات متداول تستی",
    description:
      "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
  },
  {
    title: "سوالات متداول تستی",
    description:
      "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
  },
  {
    title: "سوالات متداول تستی",
    description:
      "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
  },
  {
    title: "سوالات متداول تستی",
    description:
      "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
  },
  {
    title: "سوالات متداول تستی",
    description:
      "با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.",
  },
];
