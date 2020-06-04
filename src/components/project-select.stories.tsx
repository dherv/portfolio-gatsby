import React from "react";
import ProjectList from "./project-select";
import { sampleProps } from "./project-select.sample";

export default {
  title: "ProjectList",
  component: "ProjectList",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectList {...sampleProps}></ProjectList>;
