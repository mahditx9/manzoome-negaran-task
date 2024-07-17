import { MdLocationCity, MdMail, MdPhone } from "react-icons/md";

export const footerInfo = [
  {
    icon: <MdPhone className="w-[30px] h-[30px] ml-1 text-dark-primary" />,
    title: "مشاوره تلفنی",
    text: "021-5556 9833",
  },
  {
    icon: <MdPhone className="w-[30px] h-[30px] ml-1 text-dark-primary" />,
    title: "شماره تماس",
    text: "021-5556 9833",
  },
  {
    icon: <MdMail className="w-[30px] h-[30px] ml-1 text-dark-primary" />,
    title: "پست الکترونیکی",
    text: "freeform@gmail.com",
  },
  {
    icon: (
      <MdLocationCity className="w-[30px] h-[30px] ml-1 text-dark-primary" />
    ),
    title: "آدرس",
    text: "خ بهشتی، ما بین یوسفی و صابونچی، پلاک 197، طبقه 7، واحد 25",
  },
];

export * from "./Footer.jsx";
