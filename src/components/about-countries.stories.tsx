import React from "react";
import AboutCountries from "./about-countries";
import { sampleProps } from "./about-countries.sample";

export default {
  title: "AboutCountries",
  component: "AboutCountries",
  excludeStories: /.*Data/,
};

export const Default = () => <AboutCountries {...sampleProps}></AboutCountries>;
