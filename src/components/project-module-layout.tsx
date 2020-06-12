import React, { FC } from "react";
import { Title, Content, Module, Container } from "../styled/Module";
import ModuleTitle from "./module-title";
import ProjectSelect from "./project-select";
import { IProjectSelect } from "../types/interfaces";

const ProjectModuleLayout: FC<Props> = ({ title, select, project }) => (
  <Module as="section">
    <Title>
      <ModuleTitle title={title} />
    </Title>
    <Content space={2}>{select}</Content>
    <Container>{project}</Container>
  </Module>
);

interface Props {
  title: string;
  project: JSX.Element;
  select: JSX.Element;
}
export default ProjectModuleLayout;
