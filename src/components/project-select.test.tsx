import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectSelect from "./project-select";
import { sampleProps } from "./project-select.sample";

test("should display multiple list items", () => {
  render(<ProjectSelect {...sampleProps} />);
  expect(screen.getAllByText(sampleProps.projects[0].title)).toHaveLength(4);
  expect(
    screen.getAllByTitle(sampleProps.projects[0].frontendMain)
  ).toHaveLength(4);
  expect(
    screen.getAllByTitle(sampleProps.projects[0].backendMain)
  ).toHaveLength(4);
});
