import React from "react";
import cx from "classnames";

type InputProps = {
  type: "email" | "text" | "number" | "password";
  id?: string;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
};

export default function Input({
  type,
  id,
  placeholder,
  className,
  fullWidth = false,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={cx(className, `${fullWidth ? "w-full" : ""}`)}
    />
  );
}
