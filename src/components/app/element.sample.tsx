import React from "react";
import ElementTextContent from "./element-text-content";
import { sampleProps as ElementTextContentProps } from "./element-text-content.sample";

const { items } = ElementTextContentProps;

export const sampleProps = {
  title: "Where I lived",
  children: <ElementTextContent items={items} />,
};
