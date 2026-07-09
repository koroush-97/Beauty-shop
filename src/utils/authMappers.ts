// import type {
//   AuthUser,
//   ProfileFormValues,
//   UpdateProfileInput,
//   User,
// } from "../types/auth_types";

// export function mapUserFromApi(user: User): AuthUser {
//   return {
//     id: user.id,
//     name: user.full_name,
//     email: user.email,
//     role: user.role,
//     avatar: user.avatar ?? "",
//     phone: user.phone ?? "",
//   };
// }

// // export function mapProfileFormToApi(
// //   values: ProfileFormValues,
// // ): UpdateProfileInput {
// //   return {
// //     full_name: values.name.trim(),
// //     email: values.email.trim(),
// //     phone: values.phone.trim(),
// //   };
// // }

// export function mapProfileFormToApi(
//   values: ProfileFormValues,
// ): UpdateProfileInput {
//   const payload: UpdateProfileInput = {
//     full_name: values.name.trim(),
//     email: values.email.trim(),
//   };

//   if (values.phone?.trim()) {
//     payload.phone = values.phone.trim();
//   }

//   if (values.password?.trim()) {
//     payload.password = values.password.trim();
//   }

//   // اگر avatar یک File جدید باشه، اضافه‌ش کن
//   if (values.avatar && typeof values.avatar !== "string") {
//     payload.avatar = values.avatar;
//   }

//   return payload;
// }

// export function mapUserToProfileForm(user: AuthUser): ProfileFormValues {
//   return {
//     name: user.name ?? "",
//     email: user.email ?? "",
//     phone: user.phone ?? "",
//     avatar: user.avatar ?? "",
//     password: "",
//   };
// }
import type {
  AuthUser,
  ProfileFormValues,
  UpdateProfileInput,
  User,
} from "../types/auth_types";

export function mapUserFromApi(user: User): AuthUser {
  return {
    id: user.id,
    name: user.full_name,
    email: user.email,
    role: user.role,
    avatar: user.avatar ?? "",
    phone: user.phone ?? "",
  };
}

export function mapProfileFormToApi(
  values: ProfileFormValues,
): UpdateProfileInput {
  const payload: UpdateProfileInput = {
    full_name: values.name.trim(),
    email: values.email.trim(),
  };

  if (values.phone.trim()) {
    payload.phone = values.phone.trim();
  }

  if (values.password?.trim()) {
    payload.password = values.password.trim();
  }

  if (values.avatar.trim()) {
    payload.avatar = values.avatar.trim();
  }

  return payload;
}

export function mapUserToProfileForm(user: AuthUser): ProfileFormValues {
  return {
    name: user.name ?? "",
    email: user.email ?? "",
    phone: user.phone ?? "",
    avatar: user.avatar ?? "",
    password: "",
  };
}
