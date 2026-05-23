import { Link } from "react-router-dom";

type ComponentLinkprops = {
  icon: React.ReactNode;
  description: string;
  arrow: React.ReactNode;
};

export default function ComponentLink({
  icon,
  description,
  arrow,
}: ComponentLinkprops) {
  return (
    <Link
      to="#"
      className="h-15 border border-lightback rounded-xl flex flex-row  cursor-pointer hover:bg-yellow duration-300 delay-100 hover:text-white hover:border-yellow"
    >
      <div className="w-[10%]  flex justify-center items-center">{icon}</div>
      <div className="w-[80%]  flex justify-start items-center pr-5">
        {description}
      </div>
      <div className="w-[10%]  flex justify-center items-center">{arrow}</div>
    </Link>
  );
}
