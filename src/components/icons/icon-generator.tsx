import React from "react";
import IconReact from "./icon-react";
import IconVue from "./icon-vue";
import IconLaravel from "./icon-laravel";
import IconNode from "./icon-node";
import IconGithub from "./icon-github";
import IconLinkedin from "./icon-linkedin";
import IconDjango from "./icon-django";
import IconElectron from "./icon-electron";
import IconWebComponents from "./icon-web-components";
import IconGatsby from "./icon-gatsby";
import IconNext from "./icon-next";
import IconGraphQL from "./icon-graphql";
import IconSwift from "./icon-swift";
import IconPWA from "./icon-progressive-web-app";

const Icon = ({ name, ...rest }) => {
  const iconLibrary = new Map([
    ["React", <IconReact {...rest} />],
    ["Vue", <IconVue {...rest} />],
    ["Laravel", <IconLaravel {...rest} />],
    ["Node", <IconNode {...rest} />],
    ["Django", <IconDjango {...rest} />],
    ["Electron", <IconElectron {...rest} />],
    ["WebComponents", <IconWebComponents {...rest} />],
    ["Gatsby", <IconGatsby {...rest} />],
    ["Next", <IconNext {...rest} />],
    ["GraphQL", <IconGraphQL {...rest} />],
    ["Swift", <IconSwift {...rest} />],
    ["PWA", <IconPWA {...rest} />],
    ["Github", <IconGithub {...rest} />],
    ["Linkedin", <IconLinkedin {...rest} />],
  ]);

  return iconLibrary.has(name) ? iconLibrary.get(name) : null;
};

export default Icon;
