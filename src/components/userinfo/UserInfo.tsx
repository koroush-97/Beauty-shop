import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FiCamera,
  FiCopy,
  FiCheck,
  FiUser,
  FiPhone,
  FiMail,
  FiLock,
  FiEdit2,
  FiX,
  FiSave,
} from "react-icons/fi";

import { useAuth } from "../../hooks/useAuth";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import {
  mapProfileFormToApi,
  mapUserToProfileForm,
} from "../../utils/authMappers";
import type { ProfileFormValues } from "../../types/auth_types";

import AvatarUpload from "../AvatarUpload/AvatarUpload";

export default function UserInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { user } = useAuth();
  const updateProfileMutation = useUpdateProfile();

  const referralCode = "REF-123456";

  const defaultValues = useMemo<ProfileFormValues>(
    () =>
      user
        ? mapUserToProfileForm(user)
        : {
            name: "",
            email: "",
            phone: "",
            avatar: "",
            password: "",
          },
    [user],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    watch,
    control,
  } = useForm<ProfileFormValues>({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCancelEdit = () => {
    reset(defaultValues);
    setSuccessMessage(null);
    setIsEditing(false);
  };

  const onSubmit = async (values: ProfileFormValues) => {
    setSuccessMessage(null);

    console.log("=== [UserInfo Submit Started] ===");
    console.log("Form values (Raw):", values);
    console.log("Avatar value in Form:", values.avatar);

    try {
      const payload = mapProfileFormToApi(values);

      const result = await updateProfileMutation.mutateAsync(payload);

      console.log("API response after update:", result);

      setSuccessMessage("اطلاعات پروفایل با موفقیت بروزرسانی شد.");
      setIsEditing(false);
      reset({
        ...values,
        password: "",
      });
    } catch (err) {
      console.error("Error editing info => :", err);
    }
  };

  const mutationError =
    updateProfileMutation.error instanceof Error
      ? updateProfileMutation.error.message
      : "خطا در بروزرسانی پروفایل";

  const inputClass = (editable: boolean, hasError = false) =>
    `w-full rounded-xl border px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${
      editable
        ? "border-border bg-bg text-text"
        : "cursor-default border-border/60 bg-surface text-text"
    } ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""}`;

  return (
    <div className="space-y-8" dir="rtl">
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-xl text-text md:text-2xl">
            اطلاعات حساب کاربری
          </h2>
          <p className="mt-1 text-sm">
            اطلاعات شخصی، تماس و امنیت حساب خود را مدیریت کنید.
          </p>
        </div>

        {!isEditing ? (
          <button
            type="button"
            onClick={() => {
              reset(defaultValues);
              setSuccessMessage(null);
              setIsEditing(true);
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm text-white shadow-sm shadow-primary/20 transition hover:bg-primary/90 sm:w-auto"
          >
            <FiEdit2 />
            ویرایش اطلاعات
          </button>
        ) : (
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={updateProfileMutation.isPending || !isDirty}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm text-white shadow-sm shadow-primary/20 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <FiSave />
              {updateProfileMutation.isPending
                ? "در حال ذخیره..."
                : "ذخیره تغییرات"}
            </button>

            <button
              type="button"
              onClick={handleCancelEdit}
              disabled={updateProfileMutation.isPending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text transition hover:bg-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <FiX />
              انصراف
            </button>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-border bg-bg p-4 md:p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative w-fit">
            {/* <<< Avatar Controller >>> */}
            <Controller
              control={control}
              name="avatar"
              render={({ field: { onChange, value } }) => (
                <AvatarUpload
                  isEditing={isEditing}
                  value={typeof value === "string" ? value : ""}
                  name={watch("name")}
                  onChange={(url) => {
                    console.log("[Controller] Avatar URL changed:", url);
                    onChange(url);
                  }}
                />
              )}
            />
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-lg text-text">تصویر پروفایل</h3>
            <p className="text-sm">
              آدرس تصویر پروفایل خود را در فرم وارد کنید.
            </p>
            <p className="text-xs text-muted">
              در صورت خالی بودن، تصویر فعلی بدون تغییر باقی می‌ماند.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-border bg-bg p-4 md:p-5"
      >
        <div className="mb-5">
          <h3 className="font-heading text-lg text-text">اطلاعات شخصی</h3>
          <p className="mt-1 text-sm text-muted">
            {isEditing
              ? "اطلاعات خود را ویرایش کرده و سپس ذخیره کنید."
              : "برای ویرایش اطلاعات، روی دکمه ویرایش اطلاعات بزنید."}
          </p>
        </div>

        {successMessage ? (
          <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMessage}
          </div>
        ) : null}

        {updateProfileMutation.isError ? (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {mutationError}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-text">
              <FiUser className="text-yellow" />
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              readOnly={!isEditing}
              className={inputClass(isEditing, Boolean(errors.name))}
              {...register("name", {
                required: "نام و نام خانوادگی الزامی است",
                minLength: {
                  value: 3,
                  message: "نام باید حداقل 3 حرف باشد",
                },
              })}
            />
            {errors.name ? (
              <p className="text-xs text-red-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-text">
              <FiPhone className="text-yellow" />
              اطلاعات تماس
            </label>
            <input
              type="text"
              readOnly={!isEditing}
              className={inputClass(isEditing, Boolean(errors.phone))}
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="text-xs text-red-600">{errors.phone.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-text">
              <FiMail className="text-yellow" />
              ایمیل
            </label>
            <input
              type="email"
              readOnly={!isEditing}
              className={inputClass(isEditing, Boolean(errors.email))}
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "فرمت ایمیل معتبر نیست",
                },
              })}
            />
            {errors.email ? (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-text">
              <FiLock className="text-yellow" />
              رمز ورود جدید
            </label>
            <input
              type="password"
              readOnly={!isEditing}
              placeholder={
                isEditing ? "در صورت نیاز رمز جدید وارد کنید" : "بدون تغییر"
              }
              className={inputClass(isEditing, Boolean(errors.password))}
              {...register("password")}
            />
            <p className="text-xs text-muted">
              اگر این فیلد را خالی بگذارید، رمز عبور فعلی تغییر نمی‌کند.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center gap-2 text-sm text-text">
              <FiCamera className="text-yellow" />
              آدرس تصویر پروفایل
            </label>
            <input
              type="text"
              readOnly={!isEditing}
              className={inputClass(isEditing, Boolean(errors.avatar))}
              {...register("avatar")}
            />
            {errors.avatar ? (
              <p className="text-xs text-red-600">{errors.avatar.message}</p>
            ) : null}
          </div>
        </div>
      </form>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg p-5">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-yellow" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm">کد معرفی شما</p>

            <div className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
              <span className="font-mono text-lg font-bold tracking-widest text-text md:text-xl">
                {referralCode}
              </span>
              <span className="badge bg-yellow text-text">فعال</span>
            </div>

            <p className="mt-3 text-xs">
              این کد را برای دوستان خود ارسال کنید و از مزایای معرفی استفاده
              کنید.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm text-text transition hover:border-primary hover:bg-hover"
          >
            {copied ? (
              <>
                <FiCheck className="text-primary" />
                کپی شد
              </>
            ) : (
              <>
                <FiCopy className="text-yellow" />
                کپی کد
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
