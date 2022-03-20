import React, { FC } from "react";
import { supportedConfigs } from "../../services/fakeConfigService";
import { b as block } from "../../utils/bem-css-modules";
import s from "./RadioBox.module.scss";

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

  const b = block(s);

  // const renderCheckedClassName = () => {
  //   let name = b("body", {checked});
  //   // name += checked ? " radio-box__body--checked" : "";
  //   return name;
  // };

  const renderBoxData = () => {
    const isColor = name === supportedConfigs.color;
    if (isColor) {
      // const name = b("color", {[label.toLowerCase()]: checked});
      // console.log(name);
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
        <span className={b("price")}>+{price}€</span>
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
              {detailsList.map(item => (
                <li className={b("item")}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </label>
  );
};

export default RadioBox;
