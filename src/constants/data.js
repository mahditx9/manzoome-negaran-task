import Security from "../app/assets/icons/Security.svg";
import ElectronicDevices from "../app/assets/icons/ElectronicDevices.svg";
import Cloud1 from "../app/assets/icons/Cloud1.svg";
import Folders from "../app/assets/icons/Folders.svg";
import { Note1, Note2 } from "@/app/assets/icons";
import { About, Slide, Welcome } from "@/app/assets/images";
export const cloudTabButtonsData = [
  {
    tabNumber: 1,
    title: "مدیریت فایل",
    icon: Folders,
  },
  {
    tabNumber: 2,
    title: "دیزاین مجزا",
    icon: ElectronicDevices,
  },
  {
    tabNumber: 3,
    title: "حذف شده ها",
    icon: Cloud1,
  },
  {
    tabNumber: 4,
    title: "دامنه اختصاصی",
    icon: Security,
  },
];

export const menuLinks = [
  {
    title: "قالب ها",
    path: "/",
  },
  {
    title: "ویژگی ها",
    path: "/",
  },
  {
    title: "مقالات",
    path: "/",
  },
  {
    title: "تماس با ما",
    path: "/",
  },
];

export const formCode = `<form action="https://formcarry.com/s/{Your Form ID}"
  method="POST" enctype="multipart/form-data">
  <input type="email" name="email">

  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
</form>`;

export const businessTemplatesData = [
  {
    title: "پت شاپ",
    src: Welcome,
    notes: [
      {
        count: 1,
        src: Note1,
      },
      {
        count: 3,
        src: Note2,
      },
    ],
    description:
      "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
    buttonTitle: "همین الان شروع کنید",
  },
  {
    title: "دکوراسیون",
    src: Slide,
    notes: [
      {
        count: 1,
        src: Note1,
      },
      {
        count: 3,
        src: Note2,
      },
    ],
    description:
      "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
    buttonTitle: "همین الان شروع کنید",
  },
  {
    title: "وکیل",
    src: About,
    notes: [
      {
        count: 1,
        src: Note1,
      },
      {
        count: 3,
        src: Note2,
      },
    ],
    description:
      "شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
    buttonTitle: "همین الان شروع کنید",
  },
];
