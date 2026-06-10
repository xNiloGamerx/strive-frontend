import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, placeholder, onChange }: InputProps) {
  return (
    <div>
      <p className="font-semibold">{label}</p>
      <input
        className="p-2 w-full border border-gray-200 rounded-md text-base focus:outline-1 focus:outline-gray-400"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
