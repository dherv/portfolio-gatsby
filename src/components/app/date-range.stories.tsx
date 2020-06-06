import React from "react";
import DateRange from "./date-range";
import { sampleProps } from "./date-range.sample";

export default {
  title: "DateRange",
  component: "DateRange",
  excludeStories: /.*Data/,
};

export const Default = () => <DateRange {...sampleProps}></DateRange>;
