import React from "react";
import { render, screen } from "@testing-library/react";
import DateRange from "./date-range";
import { sampleProps } from "./date-range.sample";

test("should display the start and end date", () => {
  render(<DateRange {...sampleProps} />);
  expect(screen.getByText("August 2019 - present")).toBeInTheDocument();
});
