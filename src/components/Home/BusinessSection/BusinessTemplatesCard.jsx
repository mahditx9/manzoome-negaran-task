const { default: Image } = require("next/image");

export const BusinessTemplatesCard = ({
  className,
  src,
  title,
  notes,
  description,
  buttonTitle,
}) => {
  return (
    <div
      className={`rounded  overflow-hidden border border-[#354150]/10 bg-white ${className}`}
    >
      {/* width: 344px; height: 419px; gap: 0px; border-radius: 15px 0px 0px 0px;
      border: 1px 0px 0px 0px; opacity: 0px; */}
      <div className="relative w-full">
        <Image
          src={src}
          alt="Slide-image"
          placeholder="blur"
          className="object-fill rounded h-full w-full"
        />
      </div>
      <div className="space-y-3 p-[15px] rounded">
        <div className="flex items-center justify-between  pb-3 border-b border-[#354150]/10">
          <h4 className="h4-bold text-right text-dark-primary">{title}</h4>
          <div className="flex items-center gap-3">
            {notes.map((note, index) => (
              <div
                className="px-[15px] py-2 bg-[#354150]/10 flex items-center justify-center gap-[5px] rounded"
                key={index + 1}
              >
                <span className="text-dark-primary">{note?.count}</span>
                <Image
                  src={note?.src}
                  alt={`note${note?.count}-icon`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="paragraph-normal text-dark-primary">{description}</p>
        <button className="bg-dark-primary rounded p-3 text-center text-[15px] font-bold leading-[18.15px] tracking-[5%] text-white w-full">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};
