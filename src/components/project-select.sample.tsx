import React from "react";

import { sampleProps as projectListItemSampleProps } from "./project-select-item.sample";

export const sampleProps = {
  projects: [
    { id: 1, ...projectListItemSampleProps },
    { id: 2, ...projectListItemSampleProps },
    { id: 3, ...projectListItemSampleProps },
    { id: 4, ...projectListItemSampleProps },
  ],
};
