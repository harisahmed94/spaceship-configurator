import React, { FC } from "react";
import { supportedConfigs } from "../services/fakeConfigService";
import { b as block } from "../utils/bem-css-modules";
import styles from "./RadioBox.module.scss";

type RadioBoxProps = {
  name: string;
  price: number;
  label: string;
  checked: boolean;
  id: number;
  detailsList?: string[];
  raiseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBox: FC<RadioBoxProps> = ({ name, price, label, detailsList, checked, id, raiseChange }) => {

  const b = block(styles);

  const renderBoxData = () => {
    const isColor = name === supportedConfigs.color;
    const isOptionPkg = name === supportedConfigs["option package"];
    if (isColor) {
      return (
        <>
          <div className={b("color", {[label.toLowerCase()]: isColor})}></div>
          <span className={b("price")}>+{price}€</span>
          <span className={b("feature", {color: isColor})}>{label}</span>
        </>
      );
    }
    return (
      <>
        <span className={b("feature")}>{label}</span>
        <span className={b("price", {hidden: (isOptionPkg && !price)})}>+{price}€</span>
      </>
    );
  };

  return (
    <label className={b()}>
      <div className={b("body", {checked})}>
        <input type="radio" value={id} checked={checked} onChange={raiseChange} name={name} className={b("radio")} />

        {renderBoxData()}

        {detailsList && (
          <div className={b("options")}>
            <ul className={b("list")}>
              {detailsList.map((item, index)=> (
                <li className={b("item")} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </label>
  );
};

export default RadioBox;
