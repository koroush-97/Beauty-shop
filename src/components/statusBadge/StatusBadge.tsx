import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function StatusBadge({ status }: { status: string }) {
  const isSuccess = status === "موفق";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium 
      ${isSuccess ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"}`}
    >
      {isSuccess ? <FiCheckCircle size={12} /> : <FiAlertCircle size={12} />}
      {status}
    </span>
  );
}
