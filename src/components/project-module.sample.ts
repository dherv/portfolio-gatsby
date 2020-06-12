export const sampleProps = {
  title: "some project",
  description: "description",
  frontendMain: "React",
  backendMain: "Node",
  tools: {
    backend: ["node", "express", "mysql"],
    frontend: ["react"],
    testing: ["jest"],
    devops: ["docker"],
  },
};

export const sampleQuery = {
  allFile: {
    edges: [
      {
        node: {
          base: "screenshot-watchers.jpg",
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: "",
              srcSet: "",
              sizes: "",
            },
          },
        },
      },
      {
        node: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: "",
              srcSet: "",
              sizes: "",
            },
          },
        },
      },
    ],
  },
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: 1,
          frontmatter: {
            title: "watchers",
            image: "image",
            type: "type",
            frontendMain: "React",
            backendMain: "Node",
            tools: {
              backend: ["backend", "backend"],
              devops: ["devops", "devops"],
              frontend: ["frontend", "frontend"],
              testing: ["frontend", "frontend"],
            },
          },
          excerpt: "description",
        },
      },
    ],
  },
};
