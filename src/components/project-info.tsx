import React, { FC } from "react";
import { ITool } from "../types/interfaces";
import ProjecTitle from "./project-title";
import ProjectDescription from "./project-description";
import ProjectTools from "./project-tool-groups";
import * as styles from "./project-info.module.css";

const ProjectInfo: FC<Props> = ({ title, description, tools }) => {
  return (
    <>
      <div className={styles.element}>
        <ProjecTitle title={title} />
      </div>
      <div className={styles.element}>
        <ProjectDescription description={description} />
      </div>
      <ProjectTools tools={tools} />
    </>
  );
};

interface Props {
  title: string;
  description: string;
  tools: ITool;
}

export default ProjectInfo;
