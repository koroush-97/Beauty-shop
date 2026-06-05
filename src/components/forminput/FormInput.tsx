import { useFormContext, type FieldError } from "react-hook-form";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  rules?: object;
};

export default function FormInput({
  name,
  label,
  rules,
  type = "text",
  className = "",
  ...props
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        {...register(name, rules)}
        {...props}
        className={`w-full rounded-xl border px-3 py-2 outline-none transition ${
          error ? "border-red-500" : "border-gray-300 focus:border-yellow"
        } ${className}`}
      />

      {error?.message && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
}
