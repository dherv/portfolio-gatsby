import React, { FC } from "react";
import { Heading } from "../styled/Heading";
import * as styles from "./module-title.module.css";

const ModuleTitle: FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Heading as="h3">{title}</Heading>
    </div>
  );
};

interface Props {
  title: string;
}

export default ModuleTitle;
