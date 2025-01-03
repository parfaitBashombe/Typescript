import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  bg?: string;
  className?: string;
}>;

const ComponentWrapper = ({ children, bg, className }: Props) => {
  return (
    <div className={`py-4 ${bg || "  "}`}>
      <div className={`w-10/12 mx-auto ${className || " "}`}>{children}</div>
    </div>
  );
};

export default ComponentWrapper;
