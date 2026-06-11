import { ChangeEvent, type RefObject } from "react";
import Message from "./message";

interface InputProps {
  ref?: RefObject<null | HTMLInputElement>;
  label?: string;
  placeholder: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  messageLevel?: "info" | "warning" | "error";
  messageText?: string;
}

export default function Input({
  ref,
  label,
  placeholder,
  required,
  onChange,
  messageLevel,
  messageText,
}: InputProps) {
  return (
    <div>
      <p className="font-semibold">
        {label} {required ? <span className="text-red-500">*</span> : <></>}
      </p>
      <input
        ref={ref}
        className="p-2 w-full border border-gray-200 dark:border-gray-500 rounded-md text-base focus:outline-1 focus:outline-gray-400"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      <Message messageLevel={messageLevel} messageText={messageText} />
    </div>
  );
}
