import React, { FC } from "react";
import Icon from "./icons/icon";
import styles from "./footer.module.css";

const Footer: FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <Icon name="Github"></Icon>
      <Icon name="Linkedin"></Icon>
    </footer>
  );
};

interface Props {}

export default Footer;
