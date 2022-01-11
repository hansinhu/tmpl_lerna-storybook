import React from "react";
import "./index.scss";

export interface IProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: IProps) => {
  return (
    <div className="card">
      <div>{title}</div>
      {children}
    </div>
  );
};

export default Card;
