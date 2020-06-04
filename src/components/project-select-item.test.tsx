import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectListItem from "./project-select-item";
import { sampleProps } from "./project-select-item.sample";

test("should display a title", () => {
  render(<ProjectListItem {...sampleProps} />);
  expect(screen.getByText(sampleProps.title)).toBeInTheDocument();
});

test("should display an icon for the frontend framework", () => {
  render(<ProjectListItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.frontend.name)).toBeInTheDocument();
});

test("should display an icon for the backend framework", () => {
  render(<ProjectListItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.backend.name)).toBeInTheDocument();
});
