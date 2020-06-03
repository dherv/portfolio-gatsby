import React from "react";
import ProjectListItem from "./project-list-item";
import { sampleProps } from "./project-list-item.sample";

export default {
  title: "ProjectListItem",
  component: "ProjectListItem",
  excludeStories: /.*Data/,
};

export const Default = () => (
  <ProjectListItem {...sampleProps}></ProjectListItem>
);
