import React, { FC, useState } from "react";
import styles from "./Main.module.scss";
import SelectorGroup from "./SelectorGroup";
import PriceBreakdown from "./PriceBreakdown";
import { getConfigs } from "../services/fakeConfigService";
import { b as block } from "../utils/bem-css-modules";

const Main: FC = () => {

  const b = block(styles); 
  const configs = getConfigs();

  const initState = configs.reduce<Record<number, number>>((accum, curr) => {
    accum[curr.id] = 0;
    return accum;
  }, {});

  const [selectorGroupState, setSelectorGroupState] = useState(initState);

  const handleChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const prevState = { ...selectorGroupState };
    prevState[id] = parseInt(e.currentTarget.value);
    setSelectorGroupState(prevState);
  };

  return (
      <div className={b()}>
        <main className={b("8")}>
          <SelectorGroup configs={configs} groupState={selectorGroupState} raiseChange={handleChange} />
        </main>
        <aside className={b("4")}>
          <PriceBreakdown configs={configs} selected={selectorGroupState} />
        </aside>
      </div>
  );
};

export default Main;
