import React, { FC } from "react";

const ProjectDescription: FC<Props> = ({ description }) => {
  return <p>{description}</p>;
};

interface Props {
  description: string;
}

export default ProjectDescription;
