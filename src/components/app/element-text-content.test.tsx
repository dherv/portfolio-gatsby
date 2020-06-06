import React from "react";
import { render, screen } from "@testing-library/react";
import ElementTextContent from "./element-text-content";
import { sampleProps } from "./element-text-content.sample";

test("should display a list of text", () => {
  render(<ElementTextContent {...sampleProps} />);
  expect(screen.getByText("code")).toBeInTheDocument();
  expect(screen.getByText("jiujitsu")).toBeInTheDocument();
});
