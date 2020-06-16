import React from "react";
import ProjectDescription from "./project-description";
import { sampleProps } from "./project-description.sample";

export default {
  title: "ProjectDescription",
  component: "ProjectDescription",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ProjectDescription {...sampleProps}></ProjectDescription>
);
