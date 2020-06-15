import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import withSelection from "./with-selection";
import Project from "./project";
import { IGraphProjectNode } from "../types/interfaces";

const ProjectModule: FC<Props> = ({ node }) => {
  return node ? (
    <Project
      key={node.id}
      title={node.frontmatter.title}
      image={node.frontmatter.image}
      tools={node.frontmatter.tools}
      description={node.excerpt}
    ></Project>
  ) : null;
};

interface Props {
  node: IGraphProjectNode;
}

export default withSelection(ProjectModule, () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "personal" } } }
        sort: {
          fields: [frontmatter___backendMain, frontmatter___title]
          order: [DESC, DESC]
        }
      ) {
        ...ProjectEdgeFragment
      }
    }
  `)
);
