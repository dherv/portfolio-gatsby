import React, { FC } from "react";
import ProjectTool from "./project-tool-group";
import styles from "./project-tool-groups.module.css";

const ProjectTools: FC<Props> = ({ tools }) => {
  return (
    <ul>
      {Object.entries(tools).map(([group, names]) => (
        <li className={styles.item} key={group}>
          <ProjectTool group={group} names={names} />
        </li>
      ))}
    </ul>
  );
};

interface Props {
  tools: {
    frontend: string[];
    backend: string[];
    testing: string[];
    devops: string[];
  };
}

export default ProjectTools;
