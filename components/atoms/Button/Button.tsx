import React, { ReactNode } from "react";
import cx from "classnames";

type ButtonProps = {
  type?: "submit" | "button";
  className?: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
  children: ReactNode;
};

export default function Button({
  type,
  className,
  variant,
  fullWidth = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(className, `btn ${variant}-btn`, fullWidth ? "w-full" : "")}
    >
      {children}
    </button>
  );
}
