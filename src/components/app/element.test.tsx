import React from "react";
import { render, screen } from "@testing-library/react";
import Element from "./element";
import { sampleProps } from "./element.sample";

test("should display a heading", () => {
  render(<Element {...sampleProps} />);
  expect(screen.getByText("Where I lived")).toBeInTheDocument();
});

test("should display the app heading styled component correctly", () => {
  const { asFragment } = render(<Element {...sampleProps} />);
  expect(asFragment()).toMatchSnapshot();
});
