type inputProps = {
  placeholder?: string;
  type?: string;
};

export default function Input({ placeholder, type = "text" }: inputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className=" w-full p-1 pr-5 border-none text-right font-sans border-0 outline-none focus:outline-none focus:ring-0"
    />
  );
}
