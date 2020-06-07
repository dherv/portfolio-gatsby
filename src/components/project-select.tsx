import React, { FC } from "react";
import ProjectSelectItem from "./project-select-item";
import { IProjectSelect } from "../types/interfaces";

const ProjectSelect: FC<Props> = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{<ProjectSelectItem {...project} />}</li>
      ))}
    </ul>
  );
};

interface Props {
  projects: IProjectSelect[];
}
export default ProjectSelect;
