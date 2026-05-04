type MegaColumnItemProps = {
  children?: React.ReactNode;
  item: string;
};

export default function MegaColumnItem({
  children,
  item,
}: MegaColumnItemProps) {
  return (
    <div className="flex flex-col gap-3 min-w-40">
      {/* title */}
      <span className="font-bold text-base cursor-pointer hover:text-primary transition">
        {item}
      </span>

      {/* children list */}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
