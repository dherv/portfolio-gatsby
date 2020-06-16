import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about";
import { sampleProps } from "./about.sample";

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby");
  return {
    ...gatsby,
    graphql: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => ({
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: 1,
              frontmatter: {
                title: "stack",
                items: ["javascript"],
              },
            },
          },
        ],
      },
    })),
  };
});

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

test("should display one data list element with text content", () => {
  render(<About {...sampleProps} />);
  expect(screen.getByText("stack")).toBeInTheDocument();
  expect(screen.getByText("javascript")).toBeInTheDocument();
});
