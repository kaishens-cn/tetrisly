import * as CSSProperties from 'csstype';

declare module 'csstype' {
  interface Properties {
    '--align'?: string;
    [index: string]: any;
  }
}
