import React, { FC } from "react";
import ProjectListItem from "./project-list-item";
import { IProject } from "../types/interfaces";

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
  projects: IProject[];
}
export default ProjectList;
