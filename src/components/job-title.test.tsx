import React from "react";
import { render, screen } from "@testing-library/react";
import JobTitle from "./job-title";
import { sampleProps } from "./job-title.sample";

test("should display a job title", () => {
  render(<JobTitle {...sampleProps} />);
  expect(screen.getByText("Fullstack Developer")).toBeInTheDocument();
});
