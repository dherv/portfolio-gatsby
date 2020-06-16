import React from "react";
import Element from "./element";
import { sampleProps } from "./element.sample";

export default {
  title: "Element",
  component: "Element",
  excludeStories: /.*Data/,
};

export const Default = () => <Element {...sampleProps}></Element>;
