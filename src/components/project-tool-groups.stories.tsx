import React from "react";
import ProjectTools from "./project-tool-groups";
import { sampleProps } from "./project-tool-groups.sample";

export default {
  title: "ProjectTools",
  component: "ProjectTools",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectTools {...sampleProps}></ProjectTools>;
