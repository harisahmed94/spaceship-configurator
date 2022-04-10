import React, { FC } from "react";
import { b as block } from "../utils/bem-css-modules";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const b = block(styles);
  return (
    <header>
      <h1 className={b("title")}>Spaceship configurator</h1>
    </header>
  );
};

export default Header;
