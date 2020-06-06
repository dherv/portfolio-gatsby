import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { sampleProps } from "./footer.sample";

test("should display a github icon", () => {
  render(<Footer {...sampleProps} />);
  expect(screen.getByTitle("Github")).toBeInTheDocument();
});

test("should display a linkedin icon", () => {
  render(<Footer {...sampleProps} />);
  expect(screen.getByTitle("Linkedin")).toBeInTheDocument();
});
