import React, { useState, useEffect } from "react";
import {
  IProjectSelect,
  IGraphAllMarkdownRemark,
  IGraphProjectNode,
} from "../types/interfaces";
import { Module, Title, Tabs, Panels } from "../styled/Module";
import ModuleTitle from "./module-title";
import ProjectSelect from "./project-select";

const withSelection = (
  Component: React.FunctionComponent<{ node: IGraphProjectNode }>,
  query: () => IGraphAllMarkdownRemark<IGraphProjectNode>
) => (props: Props) => {
  const [selected, setSelected] = useState<string>("");
  const { isHero, title, ...passThroughProps } = props;
  const data = query();

  const edge = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.title === selected
  );
  const { node } = edge || {};

  const projectSelect: IProjectSelect[] = data.allMarkdownRemark.edges.map(
    ({ node }) => {
      const {
        id,
        frontmatter: { title, frontendMain, backendMain, mobileMain },
      } = node;

      return {
        id,
        title,
        frontendMain,
        backendMain,
        mobileMain,
      };
    }
  );

  useEffect(() => {
    setSelected(data.allMarkdownRemark.edges[0].node.frontmatter.title);
  }, [data]);

  const handleClick = (title: string) => {
    setSelected(title);
  };

  const select = (
    <ProjectSelect projects={projectSelect} onClick={handleClick} />
  );

  return (
    <Module isHero={isHero} as="section">
      <Title>
        <ModuleTitle title={title} />
      </Title>
      <Tabs>{select}</Tabs>
      <Panels>
        <Component {...passThroughProps} node={node} />
      </Panels>
    </Module>
  );
};

interface Props {
  isHero: boolean;
  title: string;
}
export default withSelection;
