import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectList from "./project-list";
import { sampleProps } from "./project-list.sample";

test("should display multiple list items", () => {
  render(<ProjectList {...sampleProps} />);
  expect(screen.getAllByText(sampleProps.projects[0].title)).toHaveLength(4);
  expect(
    screen.getAllByTitle(sampleProps.projects[0].frontend.name)
  ).toHaveLength(4);
  expect(
    screen.getAllByTitle(sampleProps.projects[0].backend.name)
  ).toHaveLength(4);
});
