import React, { FC } from "react";
import styles from "./nav-link.module.css";

const NavLink: FC<Props> = ({ name, href }) => {
  return (
    <a href={href} className={styles.link}>
      {name}
    </a>
  );
};

interface Props {
  name: string;
  href: string;
}

export default NavLink;
