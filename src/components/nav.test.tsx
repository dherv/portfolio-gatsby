import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./nav";

const props = {
  links: [{ name: "skills", href: "#skills" }],
};

test("should display a nav-link", () => {
  render(<Nav {...props} />);
  const link = screen.getByRole("link") as HTMLAnchorElement;
  expect(link).toBeInTheDocument();
  expect(link.href).toBe("http://localhost/#skills");
});
