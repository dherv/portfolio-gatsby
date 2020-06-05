import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "./project";
import { sampleProps } from "./project.sample";

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby");
  return {
    ...gatsby,
    graphql: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => ({
      file: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            src: "",
            srcSet: "",
            sizes: "",
          },
        },
      },
    })),
  };
});

test("should display an image", () => {
  render(<Project {...sampleProps} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("it should display a title", () => {
  render(<Project {...sampleProps} />);
  expect(screen.getByText("some project")).toBeInTheDocument();
});

test("it should display a description", () => {
  render(<Project {...sampleProps} />);
  expect(screen.getByText("description")).toBeInTheDocument();
});

test("it should display 3 tool groups", () => {
  render(<Project {...sampleProps} />);
  expect(screen.getByText("backend")).toBeInTheDocument();
  expect(screen.getByText("node, express, mysql")).toBeInTheDocument();
  expect(screen.getByText("frontend")).toBeInTheDocument();
  expect(screen.getByText("react")).toBeInTheDocument();
  expect(screen.getByText("devops")).toBeInTheDocument();
  expect(screen.getByText("docker")).toBeInTheDocument();
  expect(screen.getByText("testing")).toBeInTheDocument();
  expect(screen.getByText("jest")).toBeInTheDocument();
});
