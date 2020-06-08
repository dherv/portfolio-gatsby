import React from "react";
import Header from "../components/header";
import JobTitle from "../components/job-title";
import ModuleTitle from "../components/module-title";
import ProjectSelect from "../components/project-select";
import Icon from "../components/icons/icon";
import Project from "../components/project";
import About from "../components/about";
import ProjectWork from "../components/project-work";
import Footer from "../components/footer";
import { Wrapper, Module, Container } from "./index.styled";
import { graphql, useStaticQuery } from "gatsby";
import "destyle.css";
export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const projects = [
    {
      id: 1,
      title: "Watchers",
      frontend: { name: "React", component: <Icon name="React" /> },
      backend: { name: "Node", component: <Icon name="Node" /> },
    },
    {
      id: 1,
      title: "Watchers",
      frontend: { name: "React", component: <Icon name="React" /> },
      backend: { name: "Node", component: <Icon name="Node" /> },
    },
    {
      id: 1,
      title: "Watchers",
      frontend: { name: "React", component: <Icon name="React" /> },
      backend: { name: "Node", component: <Icon name="Node" /> },
    },
    {
      id: 1,
      title: "Watchers",
      frontend: { name: "React", component: <Icon name="React" /> },
      backend: { name: "Node", component: <Icon name="Node" /> },
    },
  ];
  const works = [
    {
      id: 2,
      title: "Naviboard",
      frontend: { name: "Vue", component: <Icon name="Vue" /> },
      backend: { name: "Laravel", component: <Icon name="Laravel" /> },
    },
    {
      id: 2,
      title: "Naviboard",
      frontend: { name: "Vue", component: <Icon name="Vue" /> },
      backend: { name: "Laravel", component: <Icon name="Laravel" /> },
    },
    {
      id: 2,
      title: "Naviboard",
      frontend: { name: "Vue", component: <Icon name="Vue" /> },
      backend: { name: "Laravel", component: <Icon name="Laravel" /> },
    },
    {
      id: 2,
      title: "Naviboard",
      frontend: { name: "Vue", component: <Icon name="Vue" /> },
      backend: { name: "Laravel", component: <Icon name="Laravel" /> },
    },
  ];
  const projectWork = {
    title: "work",
    description: "description",
    date: { start: "August 2019", end: null },
    tools: {
      backend: ["node", "express", "mysql"],
      frontend: ["react"],
      devops: ["docker"],
    },
  };
  const tools = {
    frontend: ["react", "apollo", "storybook"],
    backend: ["node", "graphQL", "mongodb"],
    testing: ["jest", "testing library", "cypress"],
    devops: ["docker", "circleci", "aws"],
  };
  const about = {
    data: [
      {
        title: "usually spend my free time",
        items: ["code", "jiujitsu"],
      },
      {
        title: "favorite stack",
        items: ["javascript"],
      },
      {
        title: "what I like now",
        items: ["coffee"],
      },
      {
        title: "what I would like to learn",
        items: ["surf"],
      },
    ],
  };
  return (
    <div>
      <Header
        title={data.site.siteMetadata.title}
        links={[
          { name: "projects", href: "#project" },
          { name: "about", href: "#about" },
          { name: "work", href: "#work" },
        ]}
      ></Header>

      <Wrapper space={4}>
        <JobTitle title="Fullstack Developer"></JobTitle>
      </Wrapper>

      <Module>
        <Container>
          <ModuleTitle title="Project which take all my free time" />
        </Container>
        <Wrapper space={2}>
          <ProjectSelect projects={projects} />
        </Wrapper>
        <Container>
          <Project
            title="Watchers"
            description="A movie website"
            tools={tools}
          ></Project>
        </Container>
      </Module>

      <Module>
        <Container>
          <ModuleTitle title="Project which take all my free time" />
        </Container>
        <Wrapper space={2}>
          <About data={about.data}></About>
        </Wrapper>
      </Module>

      <Module>
        <Container>
          <ModuleTitle title="Project which take all my free time" />
        </Container>
        <Wrapper space={2}>
          <ProjectSelect projects={works} />
        </Wrapper>
        <Container>
          <ProjectWork {...projectWork}></ProjectWork>
        </Container>
      </Module>

      <Footer></Footer>
    </div>
  );
}
