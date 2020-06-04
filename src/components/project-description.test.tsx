import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectDescription from "./project-description";
import { sampleProps } from "./project-description.sample";

test("should display the description text", () => {
  render(<ProjectDescription {...sampleProps} />);
  expect(screen.getByText(sampleProps.text)).toBeInTheDocument();
});
