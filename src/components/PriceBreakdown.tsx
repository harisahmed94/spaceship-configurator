import React, { FC } from "react";
import { basePrice, configsType } from "../services/fakeConfigService";
import "./PriceBreakdown.scss";

type PriceBreakdownProps = {
  configs: configsType;
  selected: Record<number, number>;
};

const PriceBreakdown: FC<PriceBreakdownProps> = ({ configs, selected }) => {

  let sum = basePrice;

  const renderPriceData = () => (
    configs.map(config => {
      const { id } = config;
      const index = selected[id];
      sum += config.price[index];

      return (
        <tr className="price-breakdown__row">
          <td className="price-breakdown__feature">{config.name}:</td>
          <td className="price-breakdown__value">+{config.price[index]}€</td>
        </tr>
      );
    })
  );

  return (
    <table className="price-breakdown">
      <tbody className="price-breakdown__body">
        <tr className="price-breakdown__row">
          <td className="price-breakdown__feature">Base price:</td>
          <td className="price-breakdown__value">{basePrice}€</td>
        </tr>
        {renderPriceData()}
      </tbody>
      <tfoot className="price-breakdown__footer">
        <tr>
          <td className="price-breakdown__total">Total:</td>
          <td className="price-breakdown__sum">{sum}€</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PriceBreakdown;
