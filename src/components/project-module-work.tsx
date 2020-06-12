import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import withSelection from "./with-selection";
import ProjectWork from "./project-work";
import ProjectModuleLayout from "./project-module-layout";
import { IProjectSelect, IGraphProjectNode } from "../types/interfaces";
import ProjectSelect from "./project-select";

const ProjectModuleWork: FC<Props> = ({ projectSelect, node, onClick }) => {
  const project = node && (
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
  );

  return (
    <ProjectModuleLayout
      title="Project which take all my free time"
      project={project}
      select={<ProjectSelect projects={projectSelect} onClick={onClick} />}
    ></ProjectModuleLayout>
  );
};

interface Props {
  projectSelect: IProjectSelect[];
  node: IGraphProjectNode;
  selected: string;
  onClick: () => void;
}

export default withSelection(ProjectModuleWork, () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "work" } } }) {
        ...ProjectWorkEdgeFragment
      }
    }
  `)
);
