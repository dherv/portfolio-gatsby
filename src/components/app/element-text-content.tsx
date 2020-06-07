import React, { FC } from "react";
import * as styles from "./element-text-content.module.css";

const ElementTextContent: FC<Props> = ({ items }) => {
  return (
    <ul className={styles.container}>
      {items.map((text) => (
        <li className={styles.text} key={text}>
          {text}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  items: string[];
}

export default ElementTextContent;
