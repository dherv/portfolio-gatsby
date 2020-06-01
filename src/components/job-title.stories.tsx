import React from "react";
import JobTitle from "./job-title";
import { sampleProps } from "./job-title.sample";

export default {
  title: "JobTitle",
  component: "JobTitle",
  excludeStories: /.*Data/,
};

export const Default = () => <JobTitle {...sampleProps}></JobTitle>;
