import React from "react";
import ProjectSelectItem from "./project-select-item";
import { action } from "@storybook/addon-actions";

export default {
  title: "ProjectSelectItem",
  component: "ProjectSelectItem",
  excludeStories: /.*Data/,
};
export const projectSelectItemData = {
  title: "watchers",
  frontendMain: "React",
  backendMain: "Node",
};
export const projectSelectItemActionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <ProjectSelectItem
    {...projectSelectItemData}
    {...projectSelectItemActionsData}
  ></ProjectSelectItem>
);
