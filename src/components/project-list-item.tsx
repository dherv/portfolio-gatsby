import React, { FC } from "react";
import styles from "./project-list-item.module.css";

const ProjectListItem: FC<Props> = ({ title, frontend, backend }) => {
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

export default ProjectListItem;
