import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

const props = {
  title: "title",
  links: [
    { name: "skills", href: "#skills" },
    { name: "work", href: "#work" },
  ],
};

test("should display a title", () => {
  render(<Header {...props} />);
  expect(screen.getByText("title")).toBeInTheDocument();
});

test("should display a list of links", () => {
  render(<Header {...props} />);
  const link = screen.getAllByRole("link");
  expect(link).toHaveLength(2);
});
