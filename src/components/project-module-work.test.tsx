import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProjectModuleWork from "./project-module-work";
import { sampleProps } from "./project-module-work.sample";

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
          {
            node: {
              id: 2,
              frontmatter: {
                title: "skilldo",
                image: "image",
                type: "type",
                frontendMain: "React",
                backendMain: "Node",
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
    })),
  };
});

test("should display a project module title", () => {
  render(<ProjectModuleWork {...sampleProps} />);
  expect(
    screen.queryByText("Projects I build with the team at work")
  ).toBeInTheDocument();
});

test("should display a project select icon", () => {
  render(<ProjectModuleWork {...sampleProps} />);
  expect(screen.queryAllByText("React")).toHaveLength(2);
});

test("should display a project title", () => {
  render(<ProjectModuleWork {...sampleProps} />);
  expect(screen.getAllByText("watchers")).toHaveLength(2);
});

test("should display a list of tools", () => {
  render(<ProjectModuleWork {...sampleProps} />);
  expect(screen.getAllByText("backend, backend")).toHaveLength(1);
});

test("should display a project description", () => {
  render(<ProjectModuleWork {...sampleProps} />);
  expect(screen.getByText("description")).toBeInTheDocument();
});

test("should switch project when clicking a project select item", async () => {
  render(<ProjectModuleWork {...sampleProps} />);
  fireEvent.click(screen.queryAllByText("watchers")[0]);
  await waitFor(() => screen.getByText("skilldo"));
  expect(screen.queryAllByText("skilldo")).toHaveLength(1);
});
