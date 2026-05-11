import pic from "../../assets/photo/topWeekSell/Tshirt-2.jpg";

export default function Bestcategories() {
  return (
    <div className=" border-5  min-h-87.5  bg-yellow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] grid-rows-[150px_300px]">
      <div className="bg-red-500 h-full">
        <img src={pic} alt="" className="  h-full w-full object-contain" />
      </div>
      <div className="bg-blue-500 h-full">2items</div>
    </div>
  );
}
