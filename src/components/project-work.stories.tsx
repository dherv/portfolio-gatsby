import React from "react";
import ProjectWork from "./project-work";
import { sampleProps } from "./project-work.sample";

export default {
  title: "ProjectWork",
  component: "ProjectWork",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectWork {...sampleProps}></ProjectWork>;
