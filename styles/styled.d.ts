// styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
        background : string,
        color : string,
        primary : string,
        secondary : string,
        tertiary : string
    },
    fonts:{
        family:{
            primary : string
        }
    },
    shadows:{
        button : string,
        navigation : string
    },
    filter: {
        search : string
    }
  }
}