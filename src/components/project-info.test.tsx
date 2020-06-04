import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectInfo from "./project-info";
import { sampleProps } from "./project-info.sample";

test("it should display a title", () => {
  render(<ProjectInfo {...sampleProps} />);
  expect(screen.getByText("some project")).toBeInTheDocument();
});

test("it should display a description", () => {
  render(<ProjectInfo {...sampleProps} />);
  expect(screen.getByText("description")).toBeInTheDocument();
});

test("it should display a 3 tool groups", () => {
  render(<ProjectInfo {...sampleProps} />);
  expect(screen.getByText("backend")).toBeInTheDocument();
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
});
