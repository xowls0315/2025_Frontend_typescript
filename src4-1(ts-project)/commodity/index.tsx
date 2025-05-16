"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import NationSelect, { Nation } from "./subcomponents/NationSelect";
import TypeSelect, { TypeOptions } from "./subcomponents/TypeSelect";
import Product from "./subcomponents/products/Product";
import { serverData } from "./data/server.data";

const Commodity = () => {
  const [selected, setSelected] = useState<string>("japan");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelected(e.target.value);

  return (
    <>
      <NationSelect
        selected={selected}
        handleChange={handleChange}
        nations={serverData.map((v) => v.nation)}
      />
      <TypeSelect
        type={serverData.filter((v) => v.nation == selected)[0].type}
      />
      <Product nation={selected} />
    </>
  );
};

export default Commodity;
