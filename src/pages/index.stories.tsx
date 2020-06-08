import React from "react";
import Home from "./index";
import { sampleProps } from "./index.sample";
export default {
  title: "Home",
  component: "Home",
  excludeStories: /.*Data/,
};

export const Default = () => <Home {...sampleProps}></Home>;
