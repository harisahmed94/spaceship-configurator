import React, { FC } from "react";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header>
      <h1 className={s.header__title}>Spaceship configurator</h1>
    </header>
  );
};

export default Header;
