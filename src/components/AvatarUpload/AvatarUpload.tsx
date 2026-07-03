import React from "react";
import { FiUser, FiLink } from "react-icons/fi";

interface AvatarUploadProps {
  value?: string;
  onChange: (url: string) => void;
  isEditing: boolean;
  name?: string;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  value = "",
  onChange,
  isEditing,
  name = "User",
}) => {
  const handleButtonClick = () => {
    const nextUrl = window.prompt("آدرس تصویر پروفایل را وارد کنید", value);

    console.log("[AvatarUpload] current value:", value);
    console.log("[AvatarUpload] prompt result:", nextUrl);

    if (nextUrl !== null) {
      const trimmed = nextUrl.trim();
      console.log("[AvatarUpload] trimmed url:", trimmed);
      onChange(trimmed);
      console.log("[AvatarUpload] onChange called with:", trimmed);
    } else {
      console.log("[AvatarUpload] user cancelled prompt");
    }
  };

  return (
    <div className="relative w-fit">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-yellow bg-linear-to-br from-yellow/30 via-secondary/40 to-primary/20 md:h-28 md:w-28">
        {value ? (
          <img
            src={value}
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => {
              console.warn("[AvatarUpload] image failed to load:", value);
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <FiUser className="text-3xl text-text/50" />
        )}
      </div>

      <button
        type="button"
        disabled={!isEditing}
        onClick={handleButtonClick}
        className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-yellow text-text shadow-md transition hover:scale-105 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="ویرایش تصویر پروفایل"
      >
        <FiLink size={16} />
      </button>
    </div>
  );
};

export default AvatarUpload;
