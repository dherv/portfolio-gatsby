import React, { FC } from "react";
import { HeadingLight } from "../styled/Heading";

const HeaderTitle: FC<Props> = ({ title }) => {
  return <HeadingLight as="h1">{title}</HeadingLight>;
};

interface Props {
  title: string;
}

export default HeaderTitle;
