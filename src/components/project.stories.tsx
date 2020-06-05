import React from "react";
import Project from "./project";
import { sampleProps } from "./project.sample";

export default {
  title: "Project",
  component: "Project",
  excludeStories: /.*Data/,
};

export const Default = () => <Project {...sampleProps}></Project>;
