import React, { FC } from "react";

const ProjectDescription: FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

interface Props {
  text: string;
}

export default ProjectDescription;
