import React from "react"
import NavTitle from "./nav-title"

export default {
  title: "NavTitle",
  component: "NavTitle",
  excludeStories: /.*Data/,
}

const propsData = {
  title: "Name",
}

export const Default = () => <NavTitle {...propsData}></NavTitle>
