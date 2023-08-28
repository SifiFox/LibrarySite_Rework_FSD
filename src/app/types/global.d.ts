declare module '*.scss' {
    interface IClassNames {
      [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}


declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  // const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  // export { ReactComponent };

  import {ReactElement, SVGProps} from 'react';

  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export {ReactComponent}
}

