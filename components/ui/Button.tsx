"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({
  type,
  text,
  onClick,
  actionButton,
}: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          "bg-orange-700 text-white px-4 py-2 rounded-lg",
          actionButton ? "md:rounded-full md:p-3" : ""
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;