import React from "react";
import { render, screen } from "@testing-library/react";
import AboutYears from "./about-years";
import { sampleProps } from "./about-years.sample";

test("should display a heading", () => {
  render(<AboutYears {...sampleProps} />);
  expect(screen.getByText("Code professionally for")).toBeInTheDocument();
});

test("should display a year count", () => {
  render(<AboutYears {...sampleProps} />);
  expect(screen.getByText("2yrs")).toBeInTheDocument();
});
