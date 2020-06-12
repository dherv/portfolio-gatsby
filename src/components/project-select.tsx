import React, { FC } from "react";
import ProjectSelectItem from "./project-select-item";
import { IProjectSelect } from "../types/interfaces";

const ProjectSelect: FC<Props> = ({ projects, onClick }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          {<ProjectSelectItem {...project} onClick={onClick} />}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  projects: IProjectSelect[];
  onClick: () => void;
}
export default ProjectSelect;
