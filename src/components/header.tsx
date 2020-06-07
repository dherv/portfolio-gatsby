import React from "react";
import HeaderTitle from "./header-title";
import Nav from "./nav";
import * as styles from "./header.module.css";
import { INavLink } from "../types/interfaces";

const Header = ({ title, links }) => {
  return (
    <header className={styles.header}>
      <HeaderTitle title={title} />
      <Nav links={links} />
    </header>
  );
};

interface Props {
  title: string;
  links: INavLink[];
}

export default Header;
