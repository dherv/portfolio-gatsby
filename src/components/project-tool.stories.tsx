import React from "react";
import ProjectTool from "./project-tool";
import { sampleProps } from "./project-tool.sample";

export default {
  title: "ProjectTool",
  component: "ProjectTool",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectTool {...sampleProps}></ProjectTool>;
