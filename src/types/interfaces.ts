export interface INavLink {
  name: string;
  href: string;
}

export interface IProject {
  id: number | string;
  title: string;
  frontend: { name: string; component: JSX.Element };
  backend: { name: string; component: JSX.Element };
}
