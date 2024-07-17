import { cloudTabButtonsData } from "@/constants/data";
import CloudButton from "../../CloudButton";

function CloudTab({ className, tabNumber }) {
  return (
    <div
      className={`w-[60%] mx-auto p-4 bg-light-primary flex items-center justify-center ${className} border border-[#E9E9E9] rounded`}
    >
      {cloudTabButtonsData.map((btn, index) => (
        <CloudButton data={btn} key={index + 1} tabNumber={tabNumber} />
      ))}
    </div>
  );
}

export default CloudTab;
