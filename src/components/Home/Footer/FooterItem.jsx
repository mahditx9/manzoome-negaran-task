export const FooterItem = ({ item }) => {
  return (
    <div className="flex items-center">
      {item.icon}
      <div className="flex items-center gap-1">
        <h6 className="text-[16px] leading-7 -tracking-[2%] font-bold text-dark-primary">
          {item.title} :
        </h6>
        <span className="text-[12px] leading-7 -tracking-[2%] text-dark-primary text-wrap">
          {item.text}
        </span>
      </div>
    </div>
  );
};
