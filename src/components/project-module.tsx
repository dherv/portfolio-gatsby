import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import withSelection from "./with-selection";
import Project from "./project";
import ProjectModuleLayout from "./project-module-layout";
import { IProjectSelect, IGraphProjectNode } from "../types/interfaces";
import ProjectSelect from "./project-select";

const ProjectModule: FC<Props> = ({ projectSelect, node, onClick }) => {
  const project = node && (
    <Project
      key={node.id}
      title={node.frontmatter.title}
      image={node.frontmatter.image}
      tools={node.frontmatter.tools}
      description={node.excerpt}
    ></Project>
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

export default withSelection(ProjectModule, () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "personal" } } }) {
        ...ProjectEdgeFragment
      }
    }
  `)
);
