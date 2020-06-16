import React from "react";
import { render, screen } from "@testing-library/react";
import ModuleTitle from "./module-title";
import { sampleProps } from "./module-title.sample";

test("should display a title", () => {
  render(<ModuleTitle {...sampleProps} />);
  expect(screen.getByText(sampleProps.title)).toBeInTheDocument();
});
