import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  required: boolean;
  [key: string]: any;
}
export default function TextArea({
  label,
  name,
  register,
  required,
  ...rest
}: TextAreaProps) {
  return (
    <div className="my-4">
      {label ? (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        required={required}
        {...register}
        className="mt-1 shadow-sm w-full rounded-md border border-gray-300 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600"
        rows={4}
        {...rest}
      />
    </div>
  );
}
