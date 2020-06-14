import React, { FC } from "react";
import Icon from "./icons/icon-generator";
import styles from "./footer.module.css";

const Footer: FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <a href={process.env.GATSBY_GITHUB_LINK} target="blank">
        <Icon name="Github"></Icon>
      </a>
      <a href={process.env.GATSBY_LINKEDIN_LINK} target="blank">
        <Icon name="Linkedin"></Icon>
      </a>
    </footer>
  );
};

interface Props {}

export default Footer;
