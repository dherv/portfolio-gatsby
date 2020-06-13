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
test("should display a Django icon", () => {
  const { asFragment } = render(<Icon name="Django" />);
  expect(screen.getByTitle("Django")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display an Electron icon", () => {
  const { asFragment } = render(<Icon name="Electron" />);
  expect(screen.getByTitle("Electron")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a WebComponents icon", () => {
  const { asFragment } = render(<Icon name="WebComponents" />);
  expect(screen.getByTitle("Web Components")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a react icon", () => {
  const { asFragment } = render(<Icon name="React" />);
  expect(screen.getByTitle("React")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a Gatsby icon", () => {
  const { asFragment } = render(<Icon name="Gatsby" />);
  expect(screen.getByTitle("Gatsby")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a Next icon", () => {
  const { asFragment } = render(<Icon name="Next" />);
  expect(screen.getByTitle("Next")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a GraphQL icon", () => {
  const { asFragment } = render(<Icon name="GraphQL" />);
  expect(screen.getByTitle("GraphQL")).toBeInTheDocument();
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
test("should display a Swift icon", () => {
  const { asFragment } = render(<Icon name="Swift" />);
  expect(screen.getByTitle("Swift")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
test("should display a PWA icon", () => {
  const { asFragment } = render(<Icon name="PWA" />);
  expect(screen.getByTitle("Progressive Web App")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
