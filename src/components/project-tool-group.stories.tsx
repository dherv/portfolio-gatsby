import React from "react";
import ProjectTool from "./project-tool-group";
import { sampleProps } from "./project-tool-group.sample";

export default {
  title: "ProjectTool",
  component: "ProjectTool",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectTool {...sampleProps}></ProjectTool>;
