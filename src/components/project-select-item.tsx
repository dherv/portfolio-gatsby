import React, { FC } from "react";
import * as styles from "./project-select-item.module.css";

const ProjectSelectItem: FC<Props> = ({ title, frontend, backend }) => {
  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <div className={styles.wrapper}>
        <div className={styles.element}>{frontend.component}</div>
        <div className={styles.element}>{backend.component}</div>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  frontend: { name: string; component: JSX.Element };
  backend: { name: string; component: JSX.Element };
}

export default ProjectSelectItem;
