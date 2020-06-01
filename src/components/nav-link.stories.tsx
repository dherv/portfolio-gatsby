import React from "react";
import NavLink from "./nav-link";

export default {
  title: "NavLink",
  component: "NavLink",
  excludeStories: /.*Data/,
};

const propsData = {
  href: "#skills",
  name: "skills",
};

export const Default = () => <NavLink {...propsData}></NavLink>;
