import React from "react";
import ProjectSelect from "./project-select";
import { sampleProps } from "./project-select.sample";
import {
  projectSelectItemData,
  projectSelectItemActionsData,
} from "./project-select-item.stories";
import { action } from "@storybook/addon-actions";

export default {
  title: "ProjectSelect",
  component: "ProjectSelect",
  excludeStories: /.*Data/,
};

export const projecSelectData = {
  projects: [
    { id: 1, ...projectSelectItemData },
    { id: 2, ...projectSelectItemData },
    { id: 3, ...projectSelectItemData },
    { id: 4, ...projectSelectItemData },
  ],
};

export const Default = () => (
  <ProjectSelect
    {...projecSelectData}
    {...projectSelectItemActionsData}
  ></ProjectSelect>
);
