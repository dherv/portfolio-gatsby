import React, { FC } from "react";
import { AppHeading } from "../styled/Heading";
import styles from "./project-tool.module.css";

const ProjectTool: FC<Props> = ({ toolGroup, toolNames }) => {
  return (
    <div className={styles.container}>
      <AppHeading>{toolGroup}</AppHeading>
      <p className={styles.join}>{toolNames.join(", ")}</p>
    </div>
  );
};

interface Props {
  toolGroup: string;
  toolNames: string[];
}

export default ProjectTool;
