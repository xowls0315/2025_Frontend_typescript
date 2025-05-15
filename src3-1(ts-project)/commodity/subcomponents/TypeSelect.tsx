"use client";

import { useState } from "react";

const TypeSelect = () => {
  const [] = useState();

  return (
    <div className="relative inline-block w-52">
      <select className="block w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-800 text-sm focus:outline-none cursor-pointer">
        <option value="package">패키지</option>
        <option value="free">자유</option>
      </select>
    </div>
  );
};

export default TypeSelect;
