import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  rules?: object;
};

export default function FormFileUploader({ name, rules }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const errorMessage = errors[name]?.message as string | undefined;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col px-2 gap-y-2">
      <span className="font-semibold">آواتار یا عکس خود را وارد کنید</span>
      <label
        htmlFor={name}
        className="w-full py-3 px-5 rounded-xl border border-lightback cursor-pointer flex items-center justify-center text-gray-500 hover:bg-gray-50 transition border-dashed"
      >
        {fileName ? fileName : "انتخاب فایل از دستگاه"}
      </label>

      <input
        id={name}
        type="file"
        className="hidden"
        {...register(name, {
          ...rules,
          onChange: handleFileChange,
        })}
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-20 h-20 rounded-full mt-2 object-cover"
        />
      )}
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
}
