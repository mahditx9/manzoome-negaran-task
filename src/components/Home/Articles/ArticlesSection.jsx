import { Article1, Article2, Article3 } from "@/app/assets/images";
import Image from "next/image";

export function ArticlesSection({ className }) {
  return (
    <section className=" relative overflow-hidden mt-36 min-h-screen w-full">
      <div className=" relative bottom-0 w-[80%] h-full mx-auto flex-center rounded flex-col gap-5 overflow-hidden ">
        <div className="w-full h-full flex-center flex-col">
          <span className="body-normal text-dark-primary text-nowrap inline-block">
            مقالات
          </span>
          <h2 className="h2-bold text-nowrap text-dark-primary">
            مقالات متنوع فری فرم
          </h2>
          {/* articles */}
          <div className="flex items-center gap-10 mt-8">
            {articleData.map((article, i) => (
              <ArticleCart article={article} key={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const articleData = [
  {
    title: "چگونه یک فرم بسازیم؟",
    description:
      "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
    cover: Article1,
    date: "1401/01/01",
  },
  {
    title: "چگونه یک فرم بسازیم؟",
    description:
      "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
    cover: Article2,
    date: "1401/01/01",
  },
  {
    title: "چگونه یک فرم بسازیم؟",
    description:
      "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
    cover: Article3,
    date: "1401/01/01",
  },
];

const ArticleCart = ({ article }) => {
  return (
    <div className="border border-white-primary-200 p-2.5 rounded flex flex-col gap-1.5">
      <div className="">
        <Image
          src={article?.cover}
          alt="article-cover"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        {/* font-family: Kalameh; font-size: 22px; font-weight: 700; line-height:
        32px; letter-spacing: 0.1599999964237213px; text-align: right; */}
        <span className="text-[22px] font-bold leading-[32px] tracking-[0.15px] text-dark-primary inline-block">
          {article?.title}
        </span>
        <span className="regular-12 !tracking-[0.14px] inline-block text-dark-primary">
          {article?.date}
        </span>
        <p className="small-normal !text-[14px]">{article?.description}</p>
      </div>
    </div>
  );
};
