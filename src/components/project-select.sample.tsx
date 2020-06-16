import React from "react";

import { sampleProps as projectSelectItemSampleProps } from "./project-select-item.sample";

export const sampleProps = {
  projects: [
    { id: 1, ...projectSelectItemSampleProps },
    { id: 2, ...projectSelectItemSampleProps },
    { id: 3, ...projectSelectItemSampleProps },
    { id: 4, ...projectSelectItemSampleProps },
  ],
  onClick: jest.fn(),
};
