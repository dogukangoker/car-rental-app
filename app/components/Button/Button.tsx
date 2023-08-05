import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btntype?: "primary" | "secondary";
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`${
        props.btntype === "primary" ? "bg-[#3563E9]" : "bg-[#54A6FF]"
      } rounded-2xl text-base font-semibold leading-[24px] px-4 text-white transition-all duration-300 py-2 ${className}
              hover:bg-opacity-90
              `}
      {...props}
    >
      {children}
    </button>
  );
}
