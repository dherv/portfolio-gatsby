import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./project.module.css";
import { ITool } from "../types/interfaces";
import ProjectInfo from "./project-info";
import Img from "gatsby-image";

const Project: FC<Props> = ({ title, image, tools, description }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "data/images" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <ProjectInfo title={title} description={description} tools={tools} />
      </div>
      <div className={styles.element}>
        {data.allFile.edges
          .filter((img) => img.node.base === image)
          .map((img) => {
            return (
              <Img
                className={styles.image}
                loading="eager"
                key={img.node.base}
                fluid={img.node.childImageSharp.fluid}
              />
            );
          })}
      </div>
    </div>
  );
};

interface Props {
  title: string;
  image: string;
  description: string;
  tools: ITool;
}

export default Project;
