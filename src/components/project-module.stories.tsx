import React from "react";
import ProjectModule from "./project-module";
import { sampleProps } from "./project-module.sample";

export default {
  title: "ProjectModule",
  component: "ProjectModule",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectModule {...sampleProps}></ProjectModule>;
