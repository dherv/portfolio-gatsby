import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby");
  return {
    ...gatsby,
    graphql: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => ({
      site: {
        siteMetadata: "title",
      },
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: 1,
              frontmatter: {
                title: "watchers",
                image: "image",
                type: "type",
                frontendMain: "React",
                backendMain: "Node",
                items: ["javascript"],
                tools: {
                  backend: ["backend", "backend"],
                  devops: ["devops", "devops"],
                  frontend: ["frontend", "frontend"],
                  testing: ["frontend", "frontend"],
                },
              },
              excerpt: "description",
            },
          },
        ],
      },
      allFile: {
        edges: [
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

test("should display a job title", () => {
  render(<Home />);
  expect(screen.getByText("Fullstack Developer")).toBeInTheDocument();
});
test("should display a project module", () => {
  render(<Home />);
  expect(
    screen.queryByText("Projects I build during my free time")
  ).toBeInTheDocument();
});
test("should display an about module", () => {
  render(<Home />);
  expect(screen.queryByText("A bit about me")).toBeInTheDocument();
  expect(screen.queryByText("Where I lived")).toBeInTheDocument();
});
test("should display a work module", () => {
  render(<Home />);
  expect(
    screen.queryByText("Projects I build with the team at work")
  ).toBeInTheDocument();
});
test("should display a footer", () => {
  render(<Home />);
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
