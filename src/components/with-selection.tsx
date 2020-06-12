import React, { useState, useEffect } from "react";
import { IProjectSelect } from "../types/interfaces";

const withSelection = (Component: React.ComponentType, query) => (props) => {
  const [selected, setSelected] = useState<string>("");

  const data = query();

  const edge = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.title === selected
  );
  const { node } = edge || {};

  const projectSelect: IProjectSelect[] = data.allMarkdownRemark.edges.map(
    ({ node }) => {
      const {
        id,
        frontmatter: { title, frontendMain, backendMain },
      } = node;

      return {
        id,
        title,
        frontendMain,
        backendMain,
      };
    }
  );

  useEffect(() => {
    setSelected(data.allMarkdownRemark.edges[0].node.frontmatter.title);
  }, [data]);

  const handleClick = (title: string) => {
    setSelected(title);
  };

  return (
    <Component
      {...props}
      projectSelect={projectSelect}
      node={node}
      selected={selected}
      onClick={handleClick}
    />
  );
};

export default withSelection;
