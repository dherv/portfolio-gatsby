import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTools from "./project-tool-groups";
import { sampleProps } from "./project-tool-groups.sample";

test("should display the every toolGroup", () => {
  render(<ProjectTools {...sampleProps} />);
  expect(screen.getByText("frontend")).toBeInTheDocument();
});

test("should display every toolNames", () => {
  render(<ProjectTools {...sampleProps} />);
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
});
