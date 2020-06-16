import React from "react";
import ElementTextContent from "./element-text-content";
import { sampleProps } from "./element-text-content.sample";

export default {
  title: "ElementTextContent",
  component: "ElementTextContent",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ElementTextContent {...sampleProps}></ElementTextContent>
);
