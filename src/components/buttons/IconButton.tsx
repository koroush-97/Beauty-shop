type IconButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "muted";
  width?: number;
  height?: number;
};

const variants = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-secondary text-text hover:opacity-90",
  danger: "bg-red-500 text-white hover:bg-red-600",
  muted:
    "bg-bg border-1 border-border text-muted hover:bg-lightback hover:text-muted",
};

function IconButton({
  children,
  variant = "muted",
  width,
  height,
}: IconButtonProps) {
  return (
    <button
      className={`
         rounded-lg transition duration-200 cursor-pointer
        ${variants[variant]}
      `}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
}

export default IconButton;
