import React from "react";
import IconReact from "./IconReact";
import IconVue from "./IconVue";
import IconLaravel from "./IconLaravel";
import IconNode from "./IconNode";

const Icon = ({ name, ...rest }) => {
  const iconLibrary = new Map([
    ["React", <IconReact {...rest} />],
    ["Vue", <IconVue {...rest} />],
    ["Laravel", <IconLaravel {...rest} />],
    ["Node", <IconNode {...rest} />],
  ]);

  return iconLibrary.has(name) ? iconLibrary.get(name) : null;
};

export default Icon;
