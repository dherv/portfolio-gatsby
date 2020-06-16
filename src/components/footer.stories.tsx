import React from "react";
import Footer from "./footer";
import { sampleProps } from "./footer.sample";

export default {
  title: "Footer",
  component: "Footer",
  excludeStories: /.*Data/,
};

export const Default = () => <Footer {...sampleProps}></Footer>;
