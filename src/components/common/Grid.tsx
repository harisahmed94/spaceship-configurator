import React, { FC } from "react";
import "./Grid.scss";

type GridProps = { children: React.ReactNode };

const Grid: FC<GridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export default Grid;
