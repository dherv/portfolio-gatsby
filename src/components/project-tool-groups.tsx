import React, { FC } from "react";
import ProjectTool from "./project-tool-group";
import * as styles from "./project-tool-groups.module.css";
import { ITool } from "../types/interfaces";

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
  tools: ITool;
}

export default ProjectTools;
