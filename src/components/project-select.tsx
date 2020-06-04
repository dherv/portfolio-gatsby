import React, { FC } from "react";
import ProjectListItem from "./project-select-item";
import { IProjectSelect } from "../types/interfaces";

const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{<ProjectListItem {...project} />}</li>
      ))}
    </ul>
  );
};

interface Props {
  projects: IProjectSelect[];
}
export default ProjectList;
