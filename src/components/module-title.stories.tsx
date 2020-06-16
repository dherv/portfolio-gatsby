import React from "react";
import ModuleTitle from "./module-title";
import { sampleProps } from "./module-title.sample";

export default {
  title: "ModuleTitle",
  component: "ModuleTitle",
  excludeStories: /.*Data/,
};

export const Default = () => <ModuleTitle {...sampleProps}></ModuleTitle>;
