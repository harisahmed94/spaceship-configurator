import React, { FC } from "react";
import Grid from "./common/Grid";
import "./Selector.scss";
import RadioBox from "./common/RadioBox";
import { configType } from "../services/fakeConfigService";

type SelectorProps = {
  config: configType;
  selected: number;
  raiseChange: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Selector: FC<SelectorProps> = ({ config, selected, raiseChange }) => {

  const {id, name, title, price, values, packageDetails} = config;

  const renderRadios = () => {
    return values.map((value, index) => <RadioBox key={value} name={name} id={index} checked={index === selected} price={price[index]} label={value} raiseChange={e => raiseChange(id, e)} detailsList={packageDetails?.[index]}></RadioBox>);
  };

  return (
    <div className="selector">
      <h2 className="selector__heading">{title}:</h2>
      <Grid>{renderRadios()}</Grid>
    </div>
  );
}

export default Selector;