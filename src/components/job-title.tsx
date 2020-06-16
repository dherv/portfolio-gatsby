import React, { FC } from "react";
import { HeadingDark } from "../styled/Heading";

const JobTitle: FC<Props> = ({ title }) => {
  return (
    <div>
      <HeadingDark as="h2">{title}</HeadingDark>
    </div>
  );
};

interface Props {
  title: string;
}

export default JobTitle;
