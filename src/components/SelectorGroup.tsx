import React, { FC, useState } from "react";
import { configsType } from "../services/fakeConfigService";
import Selector from "./Selector";

type SelectorsGroupProps = {
  configs: configsType;
  groupState: Record<number, number>;
  raiseChange: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectorGroup: FC<SelectorsGroupProps> = ({ configs, groupState, raiseChange }) => {

  return (
    <>
      {configs.map(config => {
        return <Selector key={config.id} config={config} selected={groupState[config.id]} raiseChange={(id, e) => raiseChange(id, e)} />;
      })}
    </>
  );
};

export default SelectorGroup;
