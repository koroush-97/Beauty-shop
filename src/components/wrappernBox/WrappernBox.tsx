type WrappernProps = {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  classname?: string;
};

export default function WrappernBox({
  children,
  width = "full",
  height = "full",
  classname,
}: WrappernProps) {
  return (
    <div
      className={` transition-shadow  hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.8)] duration-500 rounded-2xl p-2 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] ${classname} `}
      style={{ width, height }}
    >
      {children}
    </div>
  );
}
