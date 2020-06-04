import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTool from "./project-tool";
import { sampleProps } from "./project-tool.sample";

test("should display the name", () => {
  render(<ProjectTool {...sampleProps} />);
  expect(screen.getByText("backend")).toBeInTheDocument();
});

test("should display each tool name", () => {
  render(<ProjectTool {...sampleProps} />);
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
});
