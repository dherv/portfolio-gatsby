import React from "react";
import Nav from "./nav";
export default {
  title: "Nav",
  component: "Nav",
  excludeStories: /.*Data/,
};

const propsData = {
  title: "Name",
  links: [{ name: "skills", href: "#skills" }],
};

export const Default = () => <Nav {...propsData}></Nav>;
