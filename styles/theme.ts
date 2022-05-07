import { DefaultTheme } from "styled-components"
// light special: #6363ff
export const darkTheme:DefaultTheme = {
    colors:{
        background:'#1f2028',
        color:'#ffffff',
        primary:'#a9adc1',
        secondary:'#2e3039',
        tertiary:'#ffd644'
    },
    fonts:{
        family:{
            primary:"'Montserrat', sans-serif"
        }
    },
    shadows:{
        button:'0 0 2rem hsla(0,100%,100%,.35)',
        navigation:'0 .25rem 1rem hsla(0,100%,100%,.05)',
    },
    filter:{
        search:'brightness(125%)'
    }
}
export const lightTheme:DefaultTheme = {
    colors:{
        background:'#fff',
        color:'#000',
        primary:'#818890',
        secondary:'#f7f7f7',
        tertiary:'#4361ee'
    },
    fonts:{
        family:{
            primary:"'Fira Sans', sans-serif"
        },
    },
    shadows:{
        button:'0 0 2rem hsla(0,100%,0%,.35)',
        navigation:'0 .25rem 1rem hsla(0,100%,0%,.05)',
    },
    filter:{
        search:'brightness(95%)'
    }
}   