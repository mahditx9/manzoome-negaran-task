import Image from "next/image";

export const EdgeLayout = ({ className, src, width, height, imgClass }) => {
  return (
    <>
      <div className={`relative  ${className}`}>
        <Image
          src={src}
          alt="edge-img"
          width={width}
          height={height}
          className={`object-cover ${imgClass}`}
        />
      </div>
    </>
  );
};
