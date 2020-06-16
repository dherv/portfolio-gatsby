export const sampleProps = {
  title: "Projects I build during my free time",
  isHero: true,
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
