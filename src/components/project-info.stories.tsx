import React from "react";
import ProjectInfo from "./project-info";
import { sampleProps } from "./project-info.sample";

export default {
  title: "ProjectInfo",
  component: "ProjectInfo",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectInfo {...sampleProps}></ProjectInfo>;
