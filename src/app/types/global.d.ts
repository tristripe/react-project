declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg" {
  import React, {SVGProps} from "react";
  const SVG: React.VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
