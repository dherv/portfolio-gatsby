export interface INavLink {
  name: string;
  href: string;
}

export interface IProjectSelect {
  id: number | string;
  title: string;
  frontend: { name: string; component: JSX.Element };
  backend: { name: string; component: JSX.Element };
}

export interface ITool {
  frontend: string[];
  backend: string[];
  testing: string[];
  devops: string[];
}
