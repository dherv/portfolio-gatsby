import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderTitle from "./header-title";

const props = {
  title: "title",
};

test("should display a title", () => {
  render(<HeaderTitle {...props} />);
  expect(screen.getByText("title")).toBeInTheDocument();
});
