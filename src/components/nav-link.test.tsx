import React from "react";
import { render, screen } from "@testing-library/react";
import NavLink from "./nav-link";

const props = {
  href: "#skills",
  name: "skills",
};

test("should display a link with the correct url", () => {
  render(<NavLink {...props} />);
  const link = screen.getByRole("link") as HTMLAnchorElement;
  expect(link).toBeInTheDocument();
  expect(link.href).toBe("http://localhost/#skills");
});

test("should display the skill name", () => {
  render(<NavLink {...props} />);
  expect(screen.getByText("skills")).toBeInTheDocument();
});
