import React, { MouseEventHandler, ReactNode } from "react";
import cx from "classnames";

type ButtonProps = {
  type?: "submit" | "button";
  className?: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

export default function Button({
  type,
  className,
  variant,
  fullWidth = false,
  children,
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(className, `btn ${variant}-btn`, fullWidth ? "w-full" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
