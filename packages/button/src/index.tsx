import React from "react";

interface IProps {
  size: "small" | "middle" | "large";
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default Button;
