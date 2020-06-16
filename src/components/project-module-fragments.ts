import { graphql } from "gatsby";

export const ProjectEdgeFragment = graphql`
  fragment ProjectEdgeFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          image
          type
          frontendMain
          backendMain
          mobileMain
          tools {
            backend
            devops
            frontend
            testing
            mobile
          }
        }
        excerpt
      }
    }
  }
`;

export const ProjectWorkEdgeFragment = graphql`
  fragment ProjectWorkEdgeFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          type
          date_start(formatString: "MMMM, YYYY")
          date_end(formatString: "MMMM, YYYY")
          frontendMain
          backendMain
          mobileMain
          tools {
            backend
            devops
            frontend
          }
        }
        excerpt
      }
    }
  }
`;
