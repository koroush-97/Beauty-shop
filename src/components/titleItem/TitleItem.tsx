type titleItemProps = {
  header?: React.ReactNode;
  content?: string | React.ReactNode;
  icon?: React.ReactNode | string;
  classname?: string;
  containerText?: string;
};

export default function TitleItem({
  header,
  content,
  icon,
  classname = "flex flex-row gap-x-1",
  containerText = "flex flex-col justify-end text-right",
}: titleItemProps) {
  return (
    <div className={` ${classname}`}>
      <div className={`${containerText}`}>
        <h1 className="font-bold text-bg">{header}</h1>
        <div className=" text-sm">{content}</div>
      </div>
      <div className=" flex justify-center items-center">
        <div>{icon}</div>
      </div>
    </div>
  );
}
