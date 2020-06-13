import React from "react";
import Header from "../components/header";
import About from "../components/about";
import Footer from "../components/footer";
import ProjectModule from "../components/project-module";
import ProjectModuleWork from "../components/project-module-work";
import { Title, Module, Content } from "../styled/Module";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <ProjectModule />

      <Module as="section">
        <Content space={2}>
          <About></About>
        </Content>
      </Module>

      <ProjectModuleWork />

      <Footer></Footer>
    </div>
  );
}
