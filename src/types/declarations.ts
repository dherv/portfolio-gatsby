// fix css modules import error
declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}
