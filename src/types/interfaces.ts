export interface INavLink {
  name: string;
  href: string;
}

export interface IProject {
  id: number;
  title: string;
  tools: {
    backend: string[];
    devops: string[];
    frontend: string[];
    testing?: string[];
  };
  image: string;
  type: string;
  description: string;
  frontendMain?: string;
  backendMain?: string;
  date_start?: string;
  date_end?: string;
  excerpt?: string;
}

export interface IProjectSelect {
  id: number | string;
  title: string;
  frontendMain: string;
  backendMain: string;
}

export interface ITool {
  frontend: string[];
  backend: string[];
  testing?: string[];
  devops: string[];
}

export interface IAboutData {
  title: string;
  items: string[];
}

export interface IGraphProjectEdge {
  node: IGraphProjectNode;
}

export interface IGraphProjectNode {
  id: number;
  frontmatter: IProject;
  excerpt: string;
}
