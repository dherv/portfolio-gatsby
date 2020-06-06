import React from "react";
import AboutYears from "./about-years";
import { sampleProps } from "./about-years.sample";

export default {
  title: "AboutYears",
  component: "AboutYears",
  excludeStories: /.*Data/,
};

export const Default = () => <AboutYears {...sampleProps}></AboutYears>;
