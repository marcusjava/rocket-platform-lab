import React from "react";

// import { Container } from './styles';

const ButtonType = {
  primary:
    "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors",
  secondary:
    "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors",
};

interface ButtonProps {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
}

const ButtonLink: React.FC<ButtonProps> = ({ variant, children }) => {
  return (
    <a
      href="#"
      className={
        variant === "primary" ? ButtonType.primary : ButtonType.secondary
      }
    >
      {children}
    </a>
  );
};

export default ButtonLink;
