import React from "react";

import Header from "../components/header";
import JobTitle from "../components/job-title";
import ModuleTitle from "../components/module-title";
import About from "../components/about";
import Footer from "../components/footer";
import ProjectModule from "../components/project-module";
import ProjectModuleWork from "../components/project-module-work";
import { Title, Module, Content } from "../styled/Module";

export default function Home() {
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
          <About></About>
        </Content>
      </Module>

      <ProjectModuleWork />

      <Footer></Footer>
    </div>
  );
}
