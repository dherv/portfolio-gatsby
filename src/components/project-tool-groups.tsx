import React, { FC } from "react";
import ProjectTool from "./project-tool-group";
import styles from "./project-tool-groups.module.css";

const ProjectTools: FC<Props> = ({ toolGroups }) => {
  return (
    <ul>
      {Object.entries(toolGroups).map(([group, names]) => (
        <li className={styles.item} key={group}>
          <ProjectTool group={group} names={names} />
        </li>
      ))}
    </ul>
  );
};

interface Props {
  toolGroups: {
    frontend: string[];
    backend: string[];
    testing: string[];
    devops: string[];
  };
}

export default ProjectTools;
