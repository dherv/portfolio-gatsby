import React, { FC } from "react";
import Element from "./app/element";
import styles from "./about-years.module.css";

const AboutYears: FC<Props> = ({ count }) => {
  const title = "Code professionally for";
  return (
    <Element title={title}>
      <h5 className={styles.text}>{`${count}yrs`}</h5>
    </Element>
  );
};

interface Props {
  count: number;
}

export default AboutYears;
