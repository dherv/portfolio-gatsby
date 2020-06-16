import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import withSelection from "./with-selection";
import ProjectWork from "./project-work";
import { IGraphProjectNode } from "../types/interfaces";

const ProjectModuleWork: FC<Props> = ({ node }) => {
  return node ? (
    <ProjectWork
      key={node.id}
      date={{
        start: node.frontmatter.date_start,
        end: node.frontmatter.date_end,
      }}
      title={node.frontmatter.title}
      tools={node.frontmatter.tools}
      description={node.excerpt}
    ></ProjectWork>
  ) : null;
};

interface Props {
  node: IGraphProjectNode;
}

export default withSelection(ProjectModuleWork, () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "work" } } }
        sort: { fields: [frontmatter___date_end], order: DESC }
      ) {
        ...ProjectWorkEdgeFragment
      }
    }
  `)
);
