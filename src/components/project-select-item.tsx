import React, { FC } from "react";
import styles from "./project-select-item.module.css";
import Icon from "./icons/icon";

const ProjectSelectItem: FC<Props> = ({
  title,
  frontendMain,
  backendMain,
  onClick,
}) => {
  const components = {
    frontend: <Icon name={frontendMain} />,
    backend: <Icon name={backendMain} />,
  };
  return (
    <div className={styles.container} onClick={() => onClick(title)}>
      <div className={styles.inner_container}>
        <h5>{title}</h5>
        <div className={styles.wrapper}>
          <div className={styles.element}>{components.frontend}</div>
          <div className={styles.element}>{components.backend}</div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  frontendMain: string;
  backendMain: string;
  onClick: (title: string) => void;
}

export default ProjectSelectItem;
