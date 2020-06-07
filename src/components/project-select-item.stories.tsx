import React from "react";
import ProjectSelectItem from "./project-select-item";
import { sampleProps } from "./project-select-item.sample";

export default {
  title: "ProjectSelectItem",
  component: "ProjectSelectItem",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ProjectSelectItem {...sampleProps}></ProjectSelectItem>
);
