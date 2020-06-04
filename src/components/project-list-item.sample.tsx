import React from "react";
import IconNode from "./icons/icon-node";
import IconReact from "./icons/icon-react";
import Icon from "./icons/icon";

export const sampleProps = {
  title: "Some projects",
  frontend: { name: "Node", component: <Icon name="Node" /> },
  backend: { name: "React", component: <Icon name="React" /> },
};
