import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./project.module.css";
import { ITool } from "../types/interfaces";
import ProjectInfo from "./project-info";
import Img from "gatsby-image";

const Project: FC<Props> = ({ title, description, tools }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/screenshot-watchers.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="project website screenshot"
        />
      </div>
      <div className={styles.wrapper}>
        <ProjectInfo title={title} description={description} tools={tools} />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  tools: ITool;
}

export default Project;
