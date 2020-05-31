import React from "react"
import { render, screen } from "@testing-library/react"
import NavTitle from "./nav-title"

const props = {
  title: "title",
}

test("should display a title", () => {
  render(<NavTitle {...props} />)
  expect(screen.getByText("title")).toBeInTheDocument()
})
