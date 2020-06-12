import React from "react";
import "destyle.css";
import Header from "../components/header";
import JobTitle from "../components/job-title";
import ModuleTitle from "../components/module-title";
import About from "../components/about";
import Footer from "../components/footer";
import ProjectModule from "../components/project-module";
import ProjectModuleWork from "../components/project-module-work";
import { Title, Module, Content } from "../styled/Module";

export default function Home() {
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
        links={[
          { name: "projects", href: "#project" },
          { name: "about", href: "#about" },
          { name: "work", href: "#work" },
        ]}
      ></Header>

      <Content space={4} as="section">
        <JobTitle title="Fullstack Developer"></JobTitle>
      </Content>

      <ProjectModule />

      <Module as="section">
        <Title>
          <ModuleTitle title="A bit about me" />
        </Title>
        <Content space={2}>
          <About data={about.data}></About>
        </Content>
      </Module>

      <ProjectModuleWork />

      <Footer></Footer>
    </div>
  );
}
