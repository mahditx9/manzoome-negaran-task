"use client";
import { useState } from "react";
import { CloudContent } from "./CloudContent";
import CloudTab from "./CloudTab";

export function CloudManagementSection({ className }) {
  const [tabNumber, setTabNumber] = useState(1);
  return (
    <section className="relative overflow-hidden mt-36 ">
      <div className="relative bottom-0 w-[80%] mx-auto flex-center flex-col gap-5 overflow-hidden bg-dark-primary">
        <div className="bg-gray-300 w-full space-y-3.5 p-10">
          <span className="body-normal text-dark-primary">
            ویژگی های فری فرم
          </span>
          <h2 className="h2-bold w-[50%] text-dark-primary">
            ویژگی هایی که کمتر در مورد آنها شنیده‌اید
          </h2>
          <p className="paragraph-normal text-dark-primary w-[84%] mx-auto">
            بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای
            آن را در وبسایت خود پیاده سازی و یا اضافه کنید، بدین شکل که اگر شما
            ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
            می‌شود.
          </p>
        </div>
        <CloudTab
          className="transition-all ease-linear duration-200"
          tabNumber={tabNumber}
        />
        <CloudContent />
      </div>
    </section>
  );
}
