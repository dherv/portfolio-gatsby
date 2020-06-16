import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProjectSelectItem from "./project-select-item";
import { sampleProps } from "./project-select-item.sample";

test("should display a title", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByText("watchers")).toBeInTheDocument();
});

test("should display an icon for the frontend framework", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.frontendMain)).toBeInTheDocument();
});

test("should display an icon for the backend framework", () => {
  render(<ProjectSelectItem {...sampleProps} />);
  expect(screen.getByTitle(sampleProps.backendMain)).toBeInTheDocument();
});

test("should call onClick prop", async () => {
  render(<ProjectSelectItem {...sampleProps} />);
  fireEvent.click(screen.getByText("watchers"));
  await waitFor(() => screen.getByText("watchers"));
  expect(sampleProps.onClick).toHaveBeenCalledWith("watchers");
});
