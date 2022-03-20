import React, { FC, useState, useEffect } from "react";
import SelectorGroup from "./SelectorGroup";
import PriceBreakdown from "./PriceBreakdown";
import { getConfigs } from "../services/fakeConfigService";
import { b } from "../utils/bem-css-modules";
import s from "./Main.module.scss";
const Main: FC = () => {
  const configs = getConfigs();
  const block = b(s); 
  // console.log(configs);
  // console.log(s1);

  const initState = configs.reduce<Record<number, number>>((accum, curr) => {
    accum[curr.id] = 0;
    return accum;
  }, {});

  const [selectorGroupState, setSelectorGroupState] = useState(initState);

  const handleChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    // console.log(id);
    const prevState = { ...selectorGroupState };
    prevState[id] = parseInt(e.currentTarget.value);
    setSelectorGroupState(prevState);
  };
  console.log(selectorGroupState);
  console.log(block("8", {"medium": true}));
  return (
    <>
    {/* <div className="row row--gutters row--column-gap">
            <div className="row__8 row__8--medium">      
            <SelectorGroup configs={configs} groupState={selectorGroupState} raiseChange={handleChange} />
        </div>
        <div className="row__4 row_4--medium">
            
          <PriceBreakdown configs={configs} selected={selectorGroupState} />
        </div>
      </div> */}
      
      {/* <div className={b("gutters")()}> */}

      <div className={block({"gutters": true, "column-gap": true})}>
        <main className={block("8", {"medium": true})}>
          <SelectorGroup configs={configs} groupState={selectorGroupState} raiseChange={handleChange} />
        </main>
        <aside className={`${s["row__4"]} ${s["row__4--medium"]}`}>
          <PriceBreakdown configs={configs} selected={selectorGroupState} />
        </aside>
      </div>
    </>
  );
};

export default Main;
