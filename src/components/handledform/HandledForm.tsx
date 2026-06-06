import React from "react";
import {
  FormProvider,
  useForm,
  type DefaultValues,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";

type HandledFormProps<T extends FieldValues> = {
  children: React.ReactNode;
  onSubmit: (data: T, methods: UseFormReturn<T>) => void | Promise<void>;
  defaultValues?: DefaultValues<T>;
  className?: string;
};

export default function HandledForm<T extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  className,
}: HandledFormProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    mode: "onSubmit",
  });

  const handleFormSubmit: SubmitHandler<T> = async (data) => {
    await onSubmit(data, methods);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
}
