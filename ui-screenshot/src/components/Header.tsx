"use client";

import { Tab } from "./common/Tab";

export const Header = () => {
  return (
    <ul className="list-none text-[16px]">
      <Tab link={"/border-radius"}>Border Radius</Tab>
      <Tab link={"/text-shadow"}>Text Shadow</Tab>
      <Tab link={"/css-cursor"}>CSS Cursor</Tab>
      <Tab link={"/box-shadow"}>Box Shadow</Tab>
    </ul>
  );
};
