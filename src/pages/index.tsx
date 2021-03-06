import React from "react";
import Header from "../components/header";
import About from "../components/about";
import Footer from "../components/footer";
import ProjectModule from "../components/project-module";
import ProjectModuleWork from "../components/project-module-work";
import { Module } from "../styled/Module";
import { GlobalStyle } from "../styled/globals";
import SEO from "../components/seo";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <SEO />

      <Header></Header>

      <ProjectModule
        isHero={true}
        title="Projects I build during my free time"
      />

      <Module as="section">
        <About></About>
      </Module>

      <ProjectModuleWork
        isHero={false}
        title="Projects I build with the team at work"
      />

      <Footer></Footer>
    </div>
  );
}
