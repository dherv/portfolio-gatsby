import React, { FC } from "react";
import { Title, Content, Module, ContainerLarge } from "../styled/Module";
import ModuleTitle from "./module-title";

const ProjectModuleLayout: FC<Props> = ({ title, select, project }) => (
  <Module as="section">
    <Title>
      <ModuleTitle title={title} />
    </Title>
    <Content space={2}>{select}</Content>
    <ContainerLarge>{project}</ContainerLarge>
  </Module>
);

interface Props {
  title: string;
  project: JSX.Element;
  select: JSX.Element;
}
export default ProjectModuleLayout;
