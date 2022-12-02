import type { FC, ReactNode } from "react";
import React from "react";
import clsx from "clsx";
interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: ReactNode;
}

export const Button: FC<Button> = ({ variant, children, ...rest }) => {
  console.log(variant);
  return (
    <button
      {...rest}
      className={clsx(
        "bg-" + variant,
        " rounded px-3 py-1 text-gray-100 hover:bg-primary/80"
      )}
    >
      {children}
    </button>
  );
};
