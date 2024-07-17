"use client";
import Image from "next/image";
import { useRef } from "react";

export default function CloudButton({ className, data, tabNumber }) {
  const btnRef = useRef();
  const { title, icon } = data;
  if (!title || !icon) {
    return null;
  }
  return (
    <button
      className={`cursor-pointer py-2 px-[30px] flex items-center justify-center gap-1.5 text-dark-primary/50 ${
        tabNumber === data.tabNumber ? "rounded bg-dark-primary" : ""
      }`}
      ref={btnRef}
    >
      <span
        className={`${
          tabNumber === data.tabNumber ? "text-yellow-primary" : ""
        } text-nowrap`}
      >
        {title}
      </span>
      <Image
        src={icon}
        alt={`${title}-icon`}
        className="object-cover group-focus:!text-yellow-primary"
      />
    </button>
  );
}
