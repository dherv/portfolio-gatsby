import React, { FC } from "react";
import HeaderTitle from "./header-title";
import styles from "./header.module.css";
import { useStaticQuery, graphql } from "gatsby";
import JobTitle from "./job-title";

const Header: FC<Props> = () => {
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
