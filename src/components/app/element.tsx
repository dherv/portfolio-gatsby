import React, { FC } from "react";
import { AppHeading } from "../../styled/Heading";
import * as styles from "./element.module.css";

const Element: FC<Props> = ({ title, children }) => {
  return (
    <>
      <AppHeading width={150}>{title}</AppHeading>
      <div className={styles.container}> {children}</div>
    </>
  );
};

interface Props {
  title: string;
}

export default Element;
