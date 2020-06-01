import React from "react";
import Header from "./header";

export default {
  title: "Header",
  component: "Header",
  excludeStories: /.*Data/,
};

const propsData = {
  title: "Name",
  links: [
    { name: "skills", href: "#skills" },
    { name: "work", href: "#work" },
  ],
};

export const Default = () => <Header {...propsData}></Header>;
