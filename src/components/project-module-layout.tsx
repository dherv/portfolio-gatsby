import React, { FC } from "react";
import { Title, Tabs, Module, Panels } from "../styled/Module";
import ModuleTitle from "./module-title";

const ProjectModuleLayout: FC<Props> = ({ title, select, project }) => (
  <Module as="section">
    <Title>
      <ModuleTitle title={title} />
    </Title>
    <Tabs>{select}</Tabs>
    <Panels>{project}</Panels>
  </Module>
);

interface Props {
  title: string;
  project: JSX.Element;
  select: JSX.Element;
}
export default ProjectModuleLayout;
