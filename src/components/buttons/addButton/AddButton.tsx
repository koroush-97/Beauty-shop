import { FaPlus } from "react-icons/fa6";

type AddButtonProps = {
  variant: "yellow" | "blue";
};

export default function AddButton({ variant }: AddButtonProps) {
  const renderBlue = () => (
    <button className="group bg-blue-200 hover:bg-blue-500 flex justify-center items-center rounded-tr-2xl rounded-bl-2xl w-full h-full cursor-pointer">
      <FaPlus className="text-blue-700 group-hover:text-white transition" />
    </button>
  );

  const renderYellow = () => (
    <button className="group bg-yellow-200 hover:bg-yellow-500  flex justify-center items-center rounded-tr-2xl rounded-bl-2xl w-full h-full cursor-pointer">
      <FaPlus className="text-yellow-700 group-hover:text-white" />
    </button>
  );

  const variants = {
    yellow: renderYellow(),
    blue: renderBlue(),
  };

  return variants[variant] ?? null;
}
