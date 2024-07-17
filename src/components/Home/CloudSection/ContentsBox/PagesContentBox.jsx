export const PagesContentBox = ({
  activeForms,
  setActiveForms,
  filesCount = 8,
  ContentClassName,
  contentTitle = "index 1",
}) => {
  console.log(activeForms);
  return (
    <div
      className={`grid grid-cols-4 gap-5 place-content-center place-items-center ${ContentClassName}`}
    >
      {Array.from({ length: filesCount }, (_, i) => {
        const isExistInActiveForms = activeForms.includes(i + 1);
        return (
          <button
            className={`flex-between flex-col px-3.5 py-1.5 w-full  cursor-pointer transition-all ease-in duration-200 rounded bg-white  ${
              isExistInActiveForms ? "bg-yellow-primary" : ""
            }`}
            onClick={() =>
              setActiveForms((prev) =>
                isExistInActiveForms
                  ? prev.filter((p) => p !== i + 1)
                  : [...prev, i + 1]
              )
            }
            key={i + 1}
          >
            <span className="inline-block SideMenuCore text-nowrap">{contentTitle}</span>
          </button>
        );
      })}
    </div>
  );
};
