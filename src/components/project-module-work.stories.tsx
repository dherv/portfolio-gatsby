import React from "react";
import ProjectModuleWork from "./project-module-work";
import { sampleProps } from "./project-module-work.sample";

export default {
  title: "ProjectModuleWork",
  component: "ProjectModuleWork",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ProjectModuleWork {...sampleProps}></ProjectModuleWork>
);
