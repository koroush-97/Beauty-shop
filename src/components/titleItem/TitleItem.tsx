type titleItemProps = {
  //   children: React.ReactNode;
  header?: React.ReactNode;
  content?: string;
  icon?: React.ReactNode;
};

export default function TitleItem({
  //   children,
  header,
  content,
  icon,
}: titleItemProps) {
  return (
    <div className="flex flex-row gap-x-1">
      <div className=" flex flex-col justify-end text-right">
        <h1 className="font-bold text-bg">{header}</h1>
        <p className=" text-sm">{content}</p>
      </div>
      <div className=" flex justify-center items-center">
        <span>{icon}</span>
      </div>
    </div>
  );
}
