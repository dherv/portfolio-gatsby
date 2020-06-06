import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about";
import { sampleProps } from "./about.sample";

test("should display a country", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("Where I lived")).toBeInTheDocument();
  expect(screen.getByTitle("country maps")).toBeInTheDocument();
});

test("should display a year", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("Code professionally for")).toBeInTheDocument();
  expect(screen.getByText("2yrs")).toBeInTheDocument();
});

test("should display free time list element with text content", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("usually spend my free time")).toBeInTheDocument();
  expect(screen.getByText("code")).toBeInTheDocument();
});
test("should display like list element with text content", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("what I like now")).toBeInTheDocument();
  expect(screen.getByText("code")).toBeInTheDocument();
});
test("should display wish to learn element with text content", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("what I would like to learn")).toBeInTheDocument();
  expect(screen.getByText("surf")).toBeInTheDocument();
});
test("should display favorit stack element with text content", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("favorite stack")).toBeInTheDocument();
  expect(screen.getByText("javascript")).toBeInTheDocument();
});
