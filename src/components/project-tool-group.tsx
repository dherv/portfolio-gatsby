import React, { FC } from "react";
import { AppHeading } from "../styled/Heading";
import styles from "./project-tool-group.module.css";

const ProjectTool: FC<Props> = ({ group, names }) => {
  return (
    <div className={styles.container}>
      <AppHeading width={80}>{group}</AppHeading>
      <p className={styles.join}>{names.join(", ")}</p>
    </div>
  );
};

interface Props {
  group: string;
  names: string[];
}

export default ProjectTool;
