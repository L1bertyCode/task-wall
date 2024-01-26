declare module "*.module.scss";
declare module "*.svg" {
 const content: React.FunctionComponent<
  React.SVGAttributes<SVGElement>
 >;
 export default content;
}
type DeepPartial<T> = T extends object
 ? {
    [P in keyof T]?: DeepPartial<T[P]>;
   }
 : T;
