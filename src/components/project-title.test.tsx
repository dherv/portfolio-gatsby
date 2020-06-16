import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTitle from "./project-title";
import { sampleProps } from "./project-select-item.sample";

test("should display the project title", () => {
  render(<ProjectTitle {...sampleProps} />);
  expect(screen.getByText(sampleProps.title)).toBeInTheDocument();
});
