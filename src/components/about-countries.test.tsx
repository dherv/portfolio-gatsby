import React from "react";
import { render, screen } from "@testing-library/react";
import AboutCountries from "./about-countries";
import { sampleProps } from "./about-countries.sample";

test("should display a heading", () => {
  render(<AboutCountries {...sampleProps} />);
  expect(screen.getByText("Where I lived")).toBeInTheDocument();
});

test("should display the maps", () => {
  render(<AboutCountries {...sampleProps} />);
  expect(screen.getByTitle("country maps")).toBeInTheDocument();
});
