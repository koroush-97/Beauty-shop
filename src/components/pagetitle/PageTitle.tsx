import { usePageTitle } from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";

export default function PageTitle() {
  const currentPage = usePageTitle();
  return (
    <div dir="rtl" className="  flex justify-start items-center">
      <Link to="/" className="font-semibold">
        {" "}
        بیوتی شاپ{" "}
      </Link>{" "}
      / <div className="text-[blue] font-semibold mr-1"> {currentPage}</div>
    </div>
  );
}
