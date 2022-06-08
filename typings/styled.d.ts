import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            background:string;
            color:string;
            offer:{
                color:string;
                hover:string;
            }
            gray:string;
            primary:string;
            secondary:string;
            tertiary:string;
            quatenary:string;
            code:{
                background:string;
                color:string;
            },
            navShadow:string;
        },
        fonts:{
            family:{
                code:string;
                heading:string;
                regular:string;
            }
        }
    }
}