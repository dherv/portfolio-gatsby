import React from "react";
import About from "./about";
import { sampleProps } from "./about.sample";

export default {
  title: "About",
  component: "About",
  excludeStories: /.*Data/,
};

export const Default = () => <About {...sampleProps}></About>;
