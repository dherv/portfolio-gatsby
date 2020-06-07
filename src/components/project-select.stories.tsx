import React from "react";
import ProjectSelect from "./project-select";
import { sampleProps } from "./project-select.sample";

export default {
  title: "ProjectSelect",
  component: "ProjectSelect",
  excludeStories: /.*Data/,
};

export const Default = () => <ProjectSelect {...sampleProps}></ProjectSelect>;
