import React, { FC } from "react";
import * as styles from "./project-title.module.css";

const ProjecTitle: FC<Props> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

interface Props {
  title: string;
}

export default ProjecTitle;
