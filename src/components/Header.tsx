import React, { FC } from "react";
import s from "./Header.scss";

const Header: FC = () => {
  console.log(s);
  return (
    <header>
      <h1 className={s.header__title}>Spaceship configurator</h1>
    </header>
  );
};

export default Header;
