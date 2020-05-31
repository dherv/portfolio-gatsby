import React, { FC } from "react"
import { Heading } from "../styled/Heading"

const NavTitle: FC<Props> = ({ title }) => {
  return <Heading as="h1">{title}</Heading>
}

interface Props {
  title: string
}

export default NavTitle
