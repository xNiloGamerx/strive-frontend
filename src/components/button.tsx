import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary" | "disabled";
}

export default function Button({
  text,
  type,
  variant,
  className,
  onClick,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-black text-white hover:opacity-85 active:opacity-90 cursor-pointer",
    secondary: "border hover:opacity-85 active:opacity-90 cursor-pointer",
    disabled: "bg-black text-white opacity-50",
  };

  return (
    <div className="grow">
      <button
        className={`w-full p-2 rounded-xl ${styles[variant]} ${className}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
