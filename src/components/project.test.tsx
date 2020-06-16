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
      allFile: {
        edges: [
          {
            node: {
              base: "screenshot-watchers.jpg",
              childImageSharp: {
                fluid: {
                  aspectRatio: 1,
                  src: "",
                  srcSet: "",
                  sizes: "",
                },
              },
            },
          },
          {
            node: {
              childImageSharp: {
                fluid: {
                  aspectRatio: 1,
                  src: "",
                  srcSet: "",
                  sizes: "",
                },
              },
            },
          },
        ],
      },
    })),
  };
});

test("should display only one image", () => {
  render(<Project {...sampleProps} />);
  // getByRole will throw an error if multiple image in the document
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
