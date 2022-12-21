import React, { ChangeEventHandler } from "react";
import cx from "classnames";

type InputProps = {
  type: "email" | "text" | "number" | "password";
  id?: string;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  value: string;
  onChange: ChangeEventHandler;
  required?: boolean;
};

export default function Input({
  type,
  id,
  placeholder,
  className,
  fullWidth = false,
  value,
  onChange = () => {},
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={cx(className, `${fullWidth ? "w-full" : ""}`)}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
