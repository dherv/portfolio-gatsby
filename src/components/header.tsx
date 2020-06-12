import React from "react";
import HeaderTitle from "./header-title";
import Nav from "./nav";
import styles from "./header.module.css";
import { INavLink } from "../types/interfaces";
import { useStaticQuery, graphql } from "gatsby";

const Header = ({ links }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={styles.header}>
      <HeaderTitle title={data.site.siteMetadata.title} />
      <Nav links={links} />
    </header>
  );
};

interface Props {
  links: INavLink[];
}

export default Header;
