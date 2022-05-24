// styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
        background:string;
        color:string;
        headings:{
            title:string;
            subtitle:string;
        },
        primary:string;
        secondary:string;
        tertiary:string;
        quatenary:string;
    }
  }
}