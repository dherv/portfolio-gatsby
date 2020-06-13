import React, { FC } from "react";
import AboutCountries from "./about-countries";
import {
  IAboutData,
  IGraphEdge,
  IGraphAboutNode,
  IGraphAllMarkdownRemark,
} from "../types/interfaces";
import Element from "./app/element";
import ElementTextContent from "./app/element-text-content";
import AboutYears from "./about-years";
import { Styled } from "./about.styled";
import styles from "./about.module.css";
import { useStaticQuery, graphql } from "gatsby";

const About: FC<Props> = () => {
  const data: IGraphAllMarkdownRemark<IGraphAboutNode> = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
              items
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <AboutCountries />
      <ul className={styles.list}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const order = index > 0 ? index + 2 : 1;
          return (
            <Styled.Item as="li" key={node.frontmatter.title} order={order}>
              <Element title={node.frontmatter.title}>
                <ElementTextContent
                  items={node.frontmatter.items}
                ></ElementTextContent>
              </Element>
            </Styled.Item>
          );
        })}
        <Styled.Item as="li" order={1}>
          <AboutYears count={2} />
        </Styled.Item>
      </ul>
    </div>
  );
};

interface Props {}

export default About;
