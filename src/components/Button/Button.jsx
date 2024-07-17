export default function Button({
  children,
  className,
  type = "button",
  btnType = "normal",
  onClick,
  otherProps,
}) {
  const baseClassName =
    "rounded cursor-pointer transition-all ease-linear duration-200 text-center p-0.5";
  if (btnType === "normal") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`${baseClassName} ${className}`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}
