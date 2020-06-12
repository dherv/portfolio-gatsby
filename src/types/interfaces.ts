export interface INavLink {
  name: string;
  href: string;
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
