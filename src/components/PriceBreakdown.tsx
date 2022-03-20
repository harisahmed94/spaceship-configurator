import React, { FC } from "react";
import { basePrice, configsType } from "../services/fakeConfigService";
import { b as block } from "../utils/bem-css-modules";
import styles from "./PriceBreakdown.module.scss";

type PriceBreakdownProps = {
  configs: configsType;
  selected: Record<number, number>;
};

const PriceBreakdown: FC<PriceBreakdownProps> = ({ configs, selected }) => {

  const b = block(styles);

  let sum = basePrice;

  const renderPriceData = () => (
    configs.map(config => {
      const { id } = config;
      const index = selected[id];
      sum += config.price[index];

      return (
        <tr key={id} className={b("row")}>
          <td className={b("feature")}>{config.name}:</td>
          <td className={b("value")}>+{config.price[index]}€</td>
        </tr>
      );
    })
  );

  return (
    <table className={b()}>
      <tbody className={b("body")}>
        <tr className={b("row")}>
          <td className={b("feature")}>Base price:</td>
          <td className={b("value")}>{basePrice}€</td>
        </tr>
        {renderPriceData()}
      </tbody>
      <tfoot>
        <tr>
          <td className={b("total")}>Total:</td>
          <td className={b("sum")}>{sum}€</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PriceBreakdown;
