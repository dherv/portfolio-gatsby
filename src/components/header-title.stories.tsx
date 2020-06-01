import React from "react";
import HeaderTitle from "./header-title";

export default {
  title: "HeaderTitle",
  component: "HeaderTitle",
  excludeStories: /.*Data/,
};

const propsData = {
  title: "Name",
};

export const Default = () => <HeaderTitle {...propsData}></HeaderTitle>;
