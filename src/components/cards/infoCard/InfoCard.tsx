type infocardprops = {
  imgsrc: string;
  nameuser: string;
  job: string;
};

export default function InfoCard({ imgsrc, nameuser, job }: infocardprops) {
  return (
    <div className=" relative  h-60    z-0 group ">
      <div className="  relative  h-full  transition-transform duration-300 ease-out hover:-translate-y-5  z-20  rounded-t-2xl">
        <div className="absolute rounded-2xl right-0 left-0 top-0 -bottom-4 z-30 border border-lightback bg-bg flex flex-col">
          <div className=" relative mt-0 h-20 flex justify-center items-center  rounded-t-2xl">
            <img
              src={imgsrc}
              alt="team"
              className="rounded-full aspect-square absolute -translate-y-5 border-t border-lightback p-2 bg-bg "
            />
          </div>
          <h5 className="mt-2  text-center font-semibold text-[19px]">
            {nameuser}
          </h5>
          <h5 className="mt-2  text-center font-semibold text-[15px] text-gray-600">
            {job}
          </h5>
          <button className=" p-2 mt-4 rounded-xl w-[80%] mx-auto hover:bg-[#111173] cursor-pointer hover:text-bg border border-lightback">
            اطلاعات تماس{" "}
          </button>
        </div>
        <div className=" -bottom-10 left-1/2 -translate-1/2 absolute w-20">
          <div className="relative w-full h-6">
            <div className="bottom-0 top-0 left-0 right-0 bg-blue-950 rounded-bl-2xl rounded-br-2xl group-hover:-translate-y-5 h-6 transition-transform duration-600 ease-out "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
