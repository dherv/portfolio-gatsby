import React from "react";
import HeaderTitle from "./header-title";
import Nav from "./nav";
import styles from "./header.module.css";
import { INavLink } from "../types/interfaces";
import { useStaticQuery, graphql } from "gatsby";
import JobTitle from "./job-title";

const Header = () => {
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
      <JobTitle title="Fullstack Developer"></JobTitle>
    </header>
  );
};

interface Props {}

export default Header;
