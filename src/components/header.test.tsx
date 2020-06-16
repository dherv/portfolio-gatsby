import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

jest.mock("gatsby", () => {
  const gatsby = jest.requireActual("gatsby");
  return {
    ...gatsby,
    graphql: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "title",
        },
      },
    })),
  };
});

test("should display a title", () => {
  render(<Header />);
  expect(screen.getByText("title")).toBeInTheDocument();
});
