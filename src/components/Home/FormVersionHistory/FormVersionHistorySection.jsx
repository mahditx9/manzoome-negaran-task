import { FormVersionHistory } from "./FormVersionHistory";

export function FormVersionHistorySection({ className }) {
  return (
    <section className=" relative overflow-hidden mt-36 h-[934px] w-full">
      <div className=" relative bottom-0 w-[80%] h-full mx-auto flex-center flex-col gap-5 overflow-hidden ">
        <div>
          <span className="body-normal text-dark-primary">
            ثبت هر تغییر در ورژن فرم
          </span>
          <div className="flex-between gap-5">
            <h3 className="h3-bold w-[50%] text-dark-primary text-wrap">
              هر تغییری که در فرم خود ایجاد کنید یک ورژن به فرم اضافه خواهد شد
            </h3>
            <p className="paragraph-normal text-dark-primary text-wrap w-[35%] ">
              با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد
              شد و شما میتوانید تمام ورژن های قبلی و تغییرات آن را ببینید.
            </p>
          </div>
        </div>
        <FormVersionHistory />
      </div>
    </section>
  );
}
