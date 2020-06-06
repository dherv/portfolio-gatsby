import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "./icon";

test("should display a node icon", () => {
  const { asFragment } = render(<Icon name="Node" />);
  expect(screen.getByTitle("Node")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a laravel icon", () => {
  const { asFragment } = render(<Icon name="Laravel" />);
  expect(screen.getByTitle("Laravel")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a react icon", () => {
  const { asFragment } = render(<Icon name="React" />);
  expect(screen.getByTitle("React")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a vue icon", () => {
  const { asFragment } = render(<Icon name="Vue" />);
  expect(screen.getByTitle("Vue")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a github icon", () => {
  const { asFragment } = render(<Icon name="Github" />);
  expect(screen.getByTitle("Github")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("should display a linkedin icon", () => {
  const { asFragment } = render(<Icon name="Linkedin" />);
  expect(screen.getByTitle("Linkedin")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
