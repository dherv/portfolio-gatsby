import React, { FC } from "react";
import { HeadingDark } from "../styled/Heading";
import * as styles from "./job-title.module.css";

const JobTitle: FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <HeadingDark as="h2">{title}</HeadingDark>
    </div>
  );
};

interface Props {
  title: string;
}

export default JobTitle;
