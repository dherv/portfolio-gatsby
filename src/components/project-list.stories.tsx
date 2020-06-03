import React from "react";
import ProjectList from "./project-list";
import { sampleProps } from "./project-list.sample";

export default {
  title: "ProjectList",
  component: "ProjectList",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectList {...sampleProps}></ProjectList>;
