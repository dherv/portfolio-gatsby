import React from "react";
import IconReact from "./icon-react";
import IconVue from "./icon-vue";
import IconLaravel from "./icon-laravel";
import IconNode from "./icon-node";
import IconGithub from "./icon-github";
import IconLinkedin from "./icon-linkedin";

const Icon = ({ name, ...rest }) => {
  const iconLibrary = new Map([
    ["React", <IconReact {...rest} />],
    ["Vue", <IconVue {...rest} />],
    ["Laravel", <IconLaravel {...rest} />],
    ["Node", <IconNode {...rest} />],
    ["Github", <IconGithub {...rest} />],
    ["Linkedin", <IconLinkedin {...rest} />],
  ]);

  return iconLibrary.has(name) ? iconLibrary.get(name) : null;
};

export default Icon;
