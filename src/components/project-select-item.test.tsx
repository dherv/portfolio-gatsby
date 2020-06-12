import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectSelectItem from "./project-select-item";
import { sampleProps } from "./project-select-item.sample";

test("should display a title", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByText(sampleProps.title)).toBeInTheDocument();
});

test("should display an icon for the frontend framework", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.frontendMain)).toBeInTheDocument();
});

test("should display an icon for the backend framework", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.backendMain)).toBeInTheDocument();
});
