type offerNote = {
  num: number;
};

export default function OfferNote({ num }: offerNote) {
  return (
    <div className="bg-yellow w-[40%] text-bg flex flex-col justify-center items-center rounded-lg ">
      <span className="text-[14px]">{num} %</span>
      <h4 className="text-bg  text-[14px] font-semibold">تخفیف</h4>
    </div>
  );
}
