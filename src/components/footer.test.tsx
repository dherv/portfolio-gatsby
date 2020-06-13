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

test("should send to the linkedin page on click", () => {
  process.env.GATSBY_LINKEDIN_LINK = "https://linkedin.com/";
  render(<Footer {...sampleProps} />);
  expect(screen.getByTitle("Linkedin")).toBeInTheDocument();
  expect(screen.getByTitle("Linkedin").closest("a")).toHaveAttribute(
    "href",
    "https://linkedin.com/"
  );
});

test("should send to the github page on click", () => {
  process.env.GATSBY_GITHUB_LINK = "https://github.com/";
  render(<Footer {...sampleProps} />);
  expect(screen.getByTitle("Github")).toBeInTheDocument();
  expect(screen.getByTitle("Github").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/"
  );
});
