import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            background:string;
            color:string;
            gray:string;
            primary:string;
            secondary:string;
            tertiary:string;
        },
        fonts:{
            family:{
                code:string;
                regular:string;
            }
        }
    }
}