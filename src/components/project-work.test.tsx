import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectWork from "./project-work";
import { sampleProps } from "./project-work.sample";

test("it should display a title", () => {
  render(<ProjectWork {...sampleProps} />);
  expect(screen.getByText("work")).toBeInTheDocument();
});

test("it should display a description", () => {
  render(<ProjectWork {...sampleProps} />);
  expect(screen.getByText("description")).toBeInTheDocument();
});

test("it should display 3 tool groups", () => {
  render(<ProjectWork {...sampleProps} />);
  expect(screen.getByText("backend")).toBeInTheDocument();
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
  expect(screen.getByText("frontend")).toBeInTheDocument();
  expect(screen.getByText("react")).toBeInTheDocument();
  expect(screen.getByText("devops")).toBeInTheDocument();
  expect(screen.getByText("docker")).toBeInTheDocument();
});
