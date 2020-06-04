import React, { FC } from "react";
import { ITool } from "../types/interfaces";
import ProjecTitle from "./project-title";
import ProjectDescription from "./project-description";
import ProjectTools from "./project-tool-groups";
import styles from "./project-info.module.css";

const ProjectInfo: FC<Props> = ({ title, description, tools }) => {
  return (
    <div>
      <div className={styles.element}>
        <ProjecTitle title={title} />
      </div>
      <div className={styles.element}>
        <ProjectDescription text={description} />
      </div>
      <div className={styles.element}>
        <ProjectTools tools={tools} />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  description: string;
  tools: ITool;
}

export default ProjectInfo;
