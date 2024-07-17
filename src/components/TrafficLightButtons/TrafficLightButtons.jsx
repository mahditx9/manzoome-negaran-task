const TrafficLightButtons = ({ className }) => {
  return (
    <div className={`flex w-fit items-center gap-1.5 ${className}`}>
      <span className="rounded-full w-[10px] h-[10px] bg-[#FA85A4]"></span>
      <span className="rounded-full w-[10px] h-[10px] bg-[#FFE56E]"></span>
      <span className="rounded-full w-[10px] h-[10px] bg-[#52E282]"></span>
    </div>
  );
};

export default TrafficLightButtons;
