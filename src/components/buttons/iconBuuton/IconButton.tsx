// @types of props
type IconButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "muted";
  width?: number;
  height?: number;
  classname?: string;
};
// @ styles of btn
const variants = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-muted text-gray hover:bg-text hover:text-bg",
  danger: "bg-red-500 text-white hover:bg-red-600",
  muted:
    "bg-bg border-1 border-border text-muted hover:bg-lightback hover:text-muted",
};

function IconButton({
  children,
  variant = "muted",
  width,
  height,
  classname,
}: IconButtonProps) {
  return (
    <button
      className={`
         rounded-lg transition duration-200 cursor-pointer ${classname}
        ${variants[variant]}
      `}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
}

export default IconButton;
