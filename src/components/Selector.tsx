import React, { FC } from "react";
import RadioBox from "./RadioBox";
import { configType } from "../services/fakeConfigService";
import { b as block } from "../utils/bem-css-modules";
import styles from "./Selector.module.scss";

type SelectorProps = {
  config: configType;
  selected: number;
  raiseChange: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Selector: FC<SelectorProps> = ({ config, selected, raiseChange }) => {

  const {id, name, title, price, values, packageDetails} = config;

  const b = block(styles);

  const renderRadios = () => {
    return values.map((value, index) => <RadioBox key={value} name={name} id={index} checked={index === selected} price={price[index]} label={value} raiseChange={e => raiseChange(id, e)} detailsList={packageDetails?.[index]}></RadioBox>);
  };

  return (
    <div className={b()}>
      <h2 className={b("heading")}>{title}:</h2>
      <div className={b("layout")}>{renderRadios()}</div>
    </div>
  );
}

export default Selector;