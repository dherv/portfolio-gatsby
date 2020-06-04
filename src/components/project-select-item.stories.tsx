import React from "react";
import ProjectListItem from "./project-select-item";
import { sampleProps } from "./project-select-item.sample";

export default {
  title: "ProjectListItem",
  component: "ProjectListItem",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ProjectListItem {...sampleProps}></ProjectListItem>
);
