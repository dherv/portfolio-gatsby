import React from "react";
import ProjectTitle from "./project-title";
import { sampleProps } from "./project-title.sample";

export default {
  title: "ProjectTitle",
  component: "ProjectTitle",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectTitle {...sampleProps}></ProjectTitle>;
