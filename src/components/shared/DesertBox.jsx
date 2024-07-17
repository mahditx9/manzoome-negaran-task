import { IoMdMore } from "react-icons/io";

export const DesertBox = ({
  className,
  title,
  icon,
  content,
  activeTab,
  tabNumber,
}) => {
  if (activeTab !== tabNumber) {
    return;
  }
  return (
    <div
      className={`bg-dark-primary rounded w-[369px] h-[450px] absolute z-20 p-4 flex flex-col gap-6 shadow-shadow-dark-200 shadow-gray-50/10 ${className}`}
    >
      <div className="flex-between pb-3 border-b border-gray-100/60">
        <h4 className="TitleSideMenu text-white">{title}</h4>
        {icon || <IoMdMore className="text-white TitleSideMenu" />}
      </div>
      {content}
    </div>
  );
};
