type mainBtnprops = {
  text: string | React.ReactNode;
};

export default function MainBtn({ text }: mainBtnprops) {
  return (
    <button className=" rounded-bl-[20px] rounded-tr-[20px] p-1 cursor-pointer bg-[#e4e7f0] hover:bg-[#111171] group duration-300">
      <p className="p-2 text-[#5a5c83] text-[10px] md:text-[14px]  group-hover:text-white font-semibold">
        {text}
      </p>
    </button>
  );
}
