import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTool from "./project-tool-group";
import { sampleProps } from "./project-tool-group.sample";

test("should display the name", () => {
  render(<ProjectTool {...sampleProps} />);
  expect(screen.getByText("backend")).toBeInTheDocument();
});

test("should display each tool name", () => {
  render(<ProjectTool {...sampleProps} />);
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
});

test("should display the app heading styled component correctly", () => {
  const { asFragment } = render(<ProjectTool {...sampleProps} />);
  expect(asFragment()).toMatchSnapshot();
});
