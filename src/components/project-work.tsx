import React, { FC } from "react";
import ProjectTitle from "./project-title";
import ProjectDescription from "./project-description";
import DateRange from "./app/date-range";
import ProjectTools from "./project-tool-groups";
import styles from "./project-work.module.css";
import { ITool } from "../types/interfaces";

const ProjectWork: FC<Props> = ({
  title,
  date: { start, end },
  description,
  tools,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <ProjectTitle title={title}></ProjectTitle>
          <DateRange start={start} end={end} />
        </div>
        <ProjectTools tools={tools} />
      </div>
      <div className={styles.description}>
        <ProjectDescription description={description} />
      </div>
    </>
  );
};

interface Props {
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  tools: ITool;
}

export default ProjectWork;
