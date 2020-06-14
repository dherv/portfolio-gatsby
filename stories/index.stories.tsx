import React from "react";
import Home from "../src/pages/index";

export default {
  title: "Home",
  component: "Home",
  excludeStories: /.*Data/,
};

const propsData = {};

export const Default = () => <Home {...propsData}></Home>;
